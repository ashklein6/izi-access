const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('params: ', req.query);
    let sqlText = `SELECT threesixty.*, izi_categories.category FROM threesixty
    JOIN izi_categories ON izi_categories.id = threesixty.category_id WHERE `;
    let search = req.query;
    if(search.name) {
      sqlText += 'name = $1 OR client = $1 ';
    };
    if(search.location && search.name) {
      sqlText += 'AND location = $2 ';
    } else if (search.location) {
      sqlText += 'location = $2 ';
    };
    if(search.date && (search.name || search.location)) {
      sqlText += 'AND date = $3 ';
    } else if(search.date) {
      sqlText += 'date = $3 ';
    };
    if(search.category && (search.name || search.location || search.date)) {
      sqlText += 'AND category_id = $4 ';
    } else if (search.category) {
      sqlText += 'category_id = $4 ';
    };
    sqlText += 'AND published_status = $5;';
    console.log('text: ', sqlText);
    pool.query(sqlText, [search.name, search.location, search.date, search.category, search.publishedStatus])
    .then((response) => {
      res.send(response.rows);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;