const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// this route handles the search function from the manage 360s page
// it takes in a search query, then sets up the sql query based on the
// the information the user has provided.
router.get('/search', (req, res) => {
    console.log('params: ', req.query);
    let sqlText = `SELECT threesixty.*, izi_categories.category FROM threesixty
    JOIN izi_categories ON izi_categories.id = threesixty.category_id WHERE `;
    let search = req.query;
    let searchFields = [search.publishedStatus];
    let fieldCounter = 1;
    if(search.name) {
      sqlText += `(name = $${fieldCounter} OR client = $${fieldCounter}) `;
      fieldCounter++;
      searchFields.unshift(search.name);
    };
    if(search.location && search.name) {
      sqlText += `AND location = $${fieldCounter} `;
      fieldCounter++;
      searchFields.unshift(search.location);
    } else if (search.location) {
      sqlText += `location = $${fieldCounter} `;
      fieldCounter++;
      searchFields.unshift(search.location);
    };
    if(search.date && (search.name || search.location)) {
      sqlText += `AND date = $${fieldCounter} `;
      fieldCounter++;
      searchFields.unshift(search.date);
    } else if(search.date) {
      sqlText += `date = $${fieldCounter} `;
      fieldCounter++;
      searchFields.unshift(search.date);
    };
    if(search.category && (search.name || search.location || search.date)) {
      sqlText += `AND category_id = $${fieldCounter} `;
      fieldCounter++;
      searchFields.unshift(search.category);
    } else if (search.category) {
      sqlText += `category_id = $${fieldCounter} `;
      fieldCounter++;
      searchFields.unshift(search.category);
    };
    sqlText += `AND published_status = $${fieldCounter};`;
    console.log('text: ', sqlText);
    pool.query(sqlText, searchFields)
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});
// end /search

// this route gets 5 of the most recently published and unpublished 360s
// and returns them to be added to the table on the manage 360s view.
router.get('/:status', (req,res) => {
  const sqlText = `SELECT threesixty.*, izi_categories.category FROM threesixty
                  JOIN izi_categories ON izi_categories.id = threesixty.category_id
                  WHERE threesixty.published_status = $1 LIMIT 5;`;
  const status = req.params.status;
  console.log('status ', req.params.status);
  pool.query(sqlText, [status])
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});
// end /:status


router.post('/', (req, res) => {

});

module.exports = router;