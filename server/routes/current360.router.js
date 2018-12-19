const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

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
router.post('/', (req, res) => {

});

module.exports = router;