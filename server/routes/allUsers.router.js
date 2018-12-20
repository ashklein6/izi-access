const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  pool.query(`SELECT * FROM person;`)
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;