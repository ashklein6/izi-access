const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { employeesOnly } = require('../modules/employeesOnly');

// get user access level ids and types
router.get('/', employeesOnly, (req, res) => {
  pool.query('SELECT * FROM access')
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

module.exports = router;