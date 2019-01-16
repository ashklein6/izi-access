const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// get izi_categories from database
router.get('/', (req, res) => {
    pool.query(`SELECT * FROM izi_categories`)
    .then((response) => {
      res.send(response.rows);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;