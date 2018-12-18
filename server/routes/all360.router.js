const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('params: ', req.query);
    let sqlText = `SELECT * FROM threesixty WHERE`;
    if(req.query.name) {
      sqlText += ''
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;