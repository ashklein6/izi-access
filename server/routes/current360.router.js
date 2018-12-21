const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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
      queryText = `SELECT question_set.id AS question_set_id, threesixty_id, set_title, breakdown, questions.id AS question_id, response.id AS response_id, response, response_category.id AS response_category_id, description FROM question_set
      LEFT JOIN questions ON questions.set_id = question_set.id
      LEFT JOIN response ON response.question_id = questions.id
      LEFT JOIN response_category ON response_category.id = response.category_id
      WHERE threesixty_id=$1 ORDER BY question_set.id;`
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
    let section = 'goalsAssessment';
    let current360Id = req.query.current360Id;
    let queryText = 'SELECT * FROM goals WHERE threesixty_id=$1 ORDER BY id';
    
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

// Setup a GET route to get 360 section dashboard
router.get('/dashboard', (req, res) => {
    let section = 'dashboard';
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM dashboard WHERE threesixty_id=$1 ORDER BY id;`;
    
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

// Setup a GET route to get 360 section threesixty_reports
router.get('/threesixty_reports', (req, res) => {
    let section = 'threesixty_reports';
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM threesixty_reports WHERE threesixty_id=$1 ORDER BY id;`;
    
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

// Setup a GET route to get 360 section analysis_recommendation
router.get('/analysis_recommendation', (req, res) => {
    let section = 'analysis_recommendation';
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM analysis_recommendation WHERE threesixty_id=$1 ORDER BY id;`;
    
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

// Setup a GET route to get 360 section demographics
router.get('/demographics', (req, res) => {
    let section = 'demographics';
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM demographic WHERE threesixty_id=$1 ORDER BY id;`;
    
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

// Setup a GET route to get 360 section circle_share
router.get('/circle_share', (req, res) => {
    let section = 'circle_share';
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM circle_share WHERE threesixty_reports_id=$1 ORDER BY id;`;
    
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

// Setup a GET route to get 360 section question_set
router.get('/question_set', (req, res) => {
    let section = 'question_set';
    let current360Id = req.query.current360Id;
    let queryText = `SELECT question_set.id AS question_set_id, threesixty_id, set_title, breakdown, questions.id AS question_id, response.id AS response_id, response, response_category.id AS response_category_id, description FROM question_set
    LEFT JOIN questions ON questions.set_id = question_set.id
    LEFT JOIN response ON response.question_id = questions.id
    LEFT JOIN response_category ON response_category.id = response.category_id
    WHERE threesixty_id=$1 ORDER BY question_set.id;`;
    
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

// Setup a GET route to get 360 section oral_report
router.get('/oral_report', (req, res) => {
    let section = 'oral_report';
    let current360Id = req.query.current360Id;
    let queryText = `SELECT * FROM oral_report WHERE threesixty_reports_id=$1 ORDER BY id`;
    
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

// Setup a GET route to get current 360
router.get('/:id', (req, res) => {
    console.log('in this')
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

/**
 * POST route template
 */
router.post('/', (req, res) => {

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