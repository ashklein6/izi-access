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
router.post('/complete', (req, res) => {
    const new360 = req.body.data;
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        await client.query('INSERT INTO')
    }
});

router.post('/lowdown', (req, res) => {

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