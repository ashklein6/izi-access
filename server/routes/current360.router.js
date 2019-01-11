const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const goalsRows = ['Total Number', 'Number of People of Color/Indigenous', 'Number of People Under 24', 
    'Measurable Indicators of Success 1: 80% of participants met 1 new person across race, class, culture or other means of self-identity', 
    'Measurable Indicators of Success 2: 80% of participants met 2 new people across race, class, culture or other means of self-identity',
    'Measurable Indicators of Success 3: 80% of participants say that they met someone across self-identity with whom they planned to stay in touch or collaborate',
    'Measurable Indicators of Success 4: 40% of participants plan to tell someone about their experience',
    'Measurable Indicators of Success 5: first time at the table', 'Interested in future conversations about preventing child abuse and neglect',
    'Interested in future conversations about housing', 'Interested in future conversations about transportation', 
    'Interested in future conversations about education', 'Measurable Indicators of Success 6: total number of sign-in sheets'];
const dashboardRows = ['Date(s)','Timeline', 'Six Weeks - 1 Month Out', '3 Weeks Out', '2 Weeks - 1 Week Out', 'Day of Event', 
    '1-2 Weeks After', '1 Month After', 'Time(s)', 'Location(s)', 'Number Attending', 'Fun Title of Theme', 'Demographic of Attendees', 
    'Goals of Interactions', 'Measurable Indicators of Success', 'Invite Example Language', 'Invite Example Language', 
    'Flowverview', 'Proposed Questions', 'Opening Questions/Around-the-Room Questions', 'Topic-Specific Questions', 
    'Sticky Stats/Community Snapshots', 'Scavenger Hunt', 'Human Survey', 'Lightning Rounds', 'Resource Wall', 'Menu', 'Tools'];

// Setup a GET route to get a 360 section
router.get('/section', (req, res) => {
  let section = req.query.section;
  let current360Id = req.query.current360Id;

  let queryText = '';

  switch (section) {
    case 'goalsAssessment':
      queryText = 'SELECT * FROM goals WHERE threesixty_id=$1 ORDER BY id';
    case 'dashboard':
      queryText = `SELECT * FROM dashboard WHERE threesixty_id=$1 ORDER BY id;`
    case 'threesixty_reports':
      queryText = `SELECT * FROM threesixty_reports WHERE threesixty_id=$1 ORDER BY id;`
    case 'analysis_recommendation':
      queryText = `SELECT * FROM analysis_recommendation WHERE threesixty_id=$1 ORDER BY id;`
    case 'demographics':
      queryText = `SELECT * FROM demographic WHERE threesixty_id=$1 ORDER BY id;`
    case 'sticky_stats':
      queryText = ``
    case 'circle_share':
      queryText = `SELECT * FROM circle_share WHERE threesixty_reports_id=$1 ORDER BY id;`
    case 'question_set':
      queryText = `SELECT question_set.id AS question_set_id, threesixty_reports_id, set_title, breakdown, questions.id AS question_id, response.id AS response_id, response, response_category.id AS response_category_id, description AS response_category_description FROM question_set
      LEFT JOIN questions ON questions.set_id = question_set.id
      LEFT JOIN response ON response.question_id = questions.id
      LEFT JOIN response_category ON response_category.id = response.category_id
      WHERE threesixty_reports_id=$1 ORDER BY question_set.id;`
    case 'oral_report':
      queryText = `SELECT * FROM oral_report WHERE threesixty_reports_id=$1 ORDER BY id`
  }
  
  console.log('GET request for 360 section:', section, 'current 360 id:', current360Id);
  
  if (queryText !== '') {
    pool.query(queryText, [current360Id])
        .then( (results) => {
            console.log('successful with section:', section);
            res.send(results.rows);
        }).catch( (error) => {
            console.log('error on get:', error);
            res.sendStatus(500);
        })
  } else {
      res.sendStatus(400);
  }
})

// Setup a GET route to get 360 section goalsAssessment
router.get('/goalsAssessment', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = 'SELECT * FROM goals WHERE threesixty_id=$1 ORDER BY id';
    
    console.log('GET request for 360 section goalsAssessment. current 360 id:', current360Id);
    
    pool.query(queryText, [current360Id])
        .then( (results) => {
            console.log('successful with goalsAssessment');
            res.send(results.rows);
        }).catch( (error) => {
            console.log('error on get:', error);
            res.sendStatus(500);
        })
    }
);


// Setup a GET route to get 360 section dashboard
router.get('/dashboard', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM dashboard WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section dashboard. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with dashboard');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section threesixty_reports
router.get('/threesixty_reports', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM threesixty_reports WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section threesixty_reports. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with threesixty_reports');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section analysis_recommendation
router.get('/analysis_recommendation', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM analysis_recommendation WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section analysis_recommendation. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with analysis_recommendation');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section demographics
router.get('/demographics', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM demographic WHERE threesixty_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section demographics. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with demographics');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section circle_share
router.get('/circle_share', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM circle_share WHERE threesixty_reports_id=$1 ORDER BY id;`;
    
    console.log('GET request for 360 section circle_share. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with circle_share');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section question_set
router.get('/question_set', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT question_set.id AS question_set_id, threesixty_reports_id, set_title, breakdown, questions.id AS question_id, response.id AS response_id, response, response_category.id AS response_category_id, description AS response_category_description FROM question_set
    LEFT JOIN questions ON questions.set_id = question_set.id
    LEFT JOIN response ON response.question_id = questions.id
    LEFT JOIN response_category ON response_category.id = response.category_id
    WHERE threesixty_reports_id=$1 ORDER BY question_set.id;`;
    
    console.log('GET request for 360 section question_set. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with question_set');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
})

// Setup a GET route to get 360 section oral_report
router.get('/oral_report', (req, res) => {
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM oral_report WHERE threesixty_reports_id=$1 ORDER BY id`;
    
    console.log('GET request for 360 section oral_report. current 360 id:', current360Id);
    
    if (queryText !== '') {
      pool.query(queryText, [current360Id])
          .then( (results) => {
              console.log('successful with oral_report');
              res.send(results.rows);
          }).catch( (error) => {
              console.log('error on get:', error);
              res.sendStatus(500);
          })
    } else {
        res.sendStatus(400);
    }
});

router.get('/chart_data', (req, res) => {
    let data = [];
    let current360Id = req.query.current360Id;
    let queryText = `SELECT COUNT(*) - SUM(plans_to_tell::int) as plans_to_tell_no, SUM(plans_to_tell::int) as plans_to_tell_yes, 
                    COUNT(*) - SUM(first_time::int) as first_time_no, SUM(first_time::int) as first_time_yes, 
                    COUNT(*) - SUM(child_abuse::int) as child_abuse_no, SUM(child_abuse::int) as child_abuse_yes, 
                    COUNT(*) - SUM(housing::int) as housing_no, SUM(housing::int) as housing_yes, 
                    COUNT(*) - SUM(transportation::int) as transportation_no, SUM(transportation::int) as transportation_yes,
                    COUNT(*) - SUM(education::int) as education_no, SUM(education::int) as education_yes  
                    FROM demographic WHERE threesixty_id = $1;`;
    pool.query(queryText, [current360Id])
    .then((response) => {
        data = [
            {title: 'plans_to_tell', 
            data: [response.rows[0].plans_to_tell_yes, response.rows[0].plans_to_tell_no],
            legend: true},
            {title: 'first_time', 
            data: [response.rows[0].first_time_yes, response.rows[0].first_time_no]},
            {title: 'child_abuse', 
            data: [response.rows[0].child_abuse_yes, response.rows[0].child_abuse_no]},
            {title: 'housing',
            data: [response.rows[0].housing_yes, response.rows[0].housing_no]},
            {title: 'transportation', 
            data: [response.rows[0].transportation_yes, response.rows[0].transportation_no]},
            {title: 'education', 
            data: [response.rows[0].education_yes, response.rows[0].education_no]},
        ];
        res.send(data);
    })
    .catch(() => {
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/complete', async (req, res) => {
    const new360 = req.body.data; 
    const client = await pool.connect();
    let id;

    try {
        await client.query('BEGIN');
        id = await client.query(`INSERT INTO threesixty (name, date, location, category_id, client, description, published_status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id`, [new360.name, new360.date, new360.location, new360.category, new360.client, new360.description, true]);
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
    }
    return res.send(id.rows[0]);
});

router.post('/lowdown', async (req, res) => {
    const new360 = req.body.data;
    const client = await pool.connect();
    let id;

    try {
        await client.query('BEGIN');
        id = await client.query(`INSERT INTO threesixty (name, date, location, category_id, client, description) 
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
    }
    return res.send(id.rows[0]);
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