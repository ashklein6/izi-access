const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// Setup a GET route to get current 360
router.get('/:id', (req, res) => {
  const current360Id = req.params.id;
  const queryText = `SELECT * FROM threesixty WHERE id=$1;`;
    pool.query(queryText, [current360Id])
      .then( (response) => {
        res.send(response.rows);
      })
      .catch( (error) => {
        console.log('error on get:', error);
        res.sendStatus(500);
      })
})

// Setup a GET route to get a 360 section
router.get('/section', (req, res) => {
  let section = req.query.section;
  let queryText;
  switch (section) {
    case 'goalsAssessment':
      queryText = 'SELECT * FROM goals WHERE threesixty_id=$1 ORDER BY id';
  }
  let current360Id = req.query.current360Id;
  
  console.log('GET request for 360 section:', section, 'current 360 id:', current360Id);
  
  pool.query(queryText, [current360Id])
      .then( (results) => {
          res.send(results.rows);
      }).catch( (error) => {
          console.log('error on get:', error);
          res.sendStatus(500);
      })
})

/**
 * POST route template
 */
router.post('/complete', async (req, res) => {
    const new360 = req.body.data;
    const dashboardRows = ['Date(s)','Timeline', 'Six Weeks - 1 Month Out', '3 Weeks Out', '2 Weeks - 1 Week Out', 'Day of Event', 
    '1-2 Weeks After', '1 Month After', 'Time(s)', 'Location(s)', 'Number Attending', 'Fun Title of Theme', 'Demographic of Attendees', 
    'Goals of Interactions', 'Measurable Indicators of Success', 'Invite Example Language', 'Invite Example Language', 
    'Flowverview', 'Proposed Questions', 'Opening Questions/Around-the-Room Questions', 'Topic-Specific Questions', 
    'Sticky Stats/Community Snapshots', 'Scavenger Hunt', 'Human Survey', 'Lightning Rounds', 'Resource Wall', 'Menu', 'Tools'];
    const goalsRows = ['Total Number', 'Number of People of Color/Indigenous', 'Number of People Under 24', 
    'Measurable Indicators of Success 1: 80% of participants met 1 new person across race, class, culture or other means of self-identity', 
    'Measurable Indicators of Success 2: 80% of participants met 2 new people across race, class, culture or other means of self-identity',
    'Measurable Indicators of Success 3: 80% of participants say that they met someone across self-identity with whom they planned to stay in touch or collaborate',
    'Measurable Indicators of Success 4: 40% of participants plan to tell someone about their experience',
    'Measurable Indicators of Success 5: first time at the table', 'Interested in future conversations about preventing child abuse and neglect',
    'Interested in future conversations about housing', 'Interested in future conversations about transportation', 
    'Interested in future conversations about education', 'Measurable Indicators of Success 6: total number of sign-in sheets'];
    
    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        const id = await client.query(`INSERT INTO threesixty (name, date, location, category_id, client, description) 
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id`, [new360.name, new360.date, new360.location, new360.category, new360.client, new360.description]);
        await client.query(`INSERT INTO analysis_recommendation (threesixty_id) VALUES ($1)`, [id.rows[0].id]);
        for(let row of dashboardRows){
            await client.query(`INSERT INTO dashboard (threesixty_id, row_title) VALUES ($1, $2)`, [id.rows[0].id, row]);
        };
        for(let row of goalsRows){
            await client.query(`INSERT INTO goals (threesixty_id, description) VALUES ($1, $2)`, [id.rows[0].id, row]);
        };
        const threesixty_reports_id = await client.query(`INSERT INTO threesixty_reports (threesixty_id) VALUES ($1) RETURNING id`, [id.rows[0].id]);
        await client.query(`INSERT INTO oral_report (threesixty_reports_id, group_num) VALUES ($1, $2)`, [threesixty_reports_id.rows[0].id, 1]);
        await client.query(`INSERT INTO circle_share (threesixty_reports_id) VALUES ($1)`, [threesixty_reports_id.rows[0].id]);
        const set_id = await client.query(`INSERT INTO question_set (threesixty_reports_id, set_title) VALUES ($1, $2) RETURNING id`, [threesixty_reports_id.rows[0].id, 'QUESTION 1']);
        await client.query(`INSERT INTO questions (set_id) VALUES ($1)`, [set_id.rows[0].id]);
        await client.query('COMMIT'); 
    } catch (error) {
        await client.query('ROLLBACK');
        console.log('error doing the thing');
        throw error;   
    } finally {
        client.release();
        return res.sendStatus(201)
    }
});

router.post('/lowdown', async (req, res) => {
    const new360 = req.body.data;
    const goalsRows = ['Total Number', 'Number of People of Color/Indigenous', 'Number of People Under 24', 
    'Measurable Indicators of Success 1: 80% of participants met 1 new person across race, class, culture or other means of self-identity', 
    'Measurable Indicators of Success 2: 80% of participants met 2 new people across race, class, culture or other means of self-identity',
    'Measurable Indicators of Success 3: 80% of participants say that they met someone across self-identity with whom they planned to stay in touch or collaborate',
    'Measurable Indicators of Success 4: 40% of participants plan to tell someone about their experience',
    'Measurable Indicators of Success 5: first time at the table', 'Interested in future conversations about preventing child abuse and neglect',
    'Interested in future conversations about housing', 'Interested in future conversations about transportation', 
    'Interested in future conversations about education', 'Measurable Indicators of Success 6: total number of sign-in sheets'];

    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        const id = await client.query(`INSERT INTO threesixty (name, date, location, category_id, client, description) 
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id`, [new360.name, new360.date, new360.location, new360.category, new360.client, new360.description]);
        for(let row of goalsRows){
            await client.query(`INSERT INTO goals (threesixty_id, description) VALUES ($1, $2)`, [id.rows[0].id, row]);
        };
        const threesixty_reports_id = await client.query(`INSERT INTO threesixty_reports (threesixty_id) VALUES ($1) RETURNING id`, [id.rows[0].id]);
        const set_id = await client.query(`INSERT INTO question_set (threesixty_reports_id, set_title) VALUES ($1, $2) RETURNING id`, [threesixty_reports_id.rows[0].id, 'QUESTION 1']);
        await client.query(`INSERT INTO questions (set_id) VALUES ($1)`, [set_id.rows[0].id]);
        await client.query('COMMIT'); 
    } catch (error) {
        await client.query('ROLLBACK');
        console.log('error doing the thing');
        throw error;   
    } finally {
        client.release();
        return res.sendStatus(201)
    }
});

router.post('/edit/goalsAssessment', (async (req, res) => {
    console.log('in current360.router.js PUT for /current360/edit/goalsAssessment');
    let newData = req.body.data;
    console.log('to update goals to:', newData);

    const client = await pool.connect();

    try {
        await client.query('BEGIN');
        await client.query(`INSERT INTO goals (threesixty_id, description, desired, delivered, difference, percent, comments)
        VALUES (1, 'Total Number', 125, 140, 15, 112, 'Based on in-room count. In room count is taken 3 to 6 times per account by at least two different people.');
        `)
        await client.query(`INSERT INTO goals (threesixty_id, description, desired, delivered, difference, percent, comments)
        VALUES (1, 'Number of people of color/Indigenous', 71, 70, -1, 99, 'We generally set this goal at 51% in communities with at least 15% POC/Immigrant/Indigenous. Based on an in-room count.'),(1, 'Number of people under 24', 35, 33, -2, 94, 'We generally set this goal at 25 - 33% unless the [project/event] does not warrant. Based on both in room and sign-in sheet counts.'), (1, 'Measurable Indicators of Success 1: 80% of participants met 1 new person across race, class, culture or other means of self-identity', 112, 126, 14, 113, '80% of the room is our target goal for this MIS.');
        `)
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        return res.status(500).send(error);
    } finally {
        client.release();
        return res.sendStatus(201)
    }
}))

module.exports = router;