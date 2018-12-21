const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  pool.query(`SELECT person.firstname, person.lastname, person.email, person.id, 
            person.access_id, access.access_type, access.access_level 
            FROM person JOIN access ON access.id = person.access_id
            WHERE access.access_level > 0;`)
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.get('/search', (req,res) => {
  let sqlText = `SELECT  person.firstname, person.lastname, person.email, person.id,
                person.access_id, access.access_type, access.access_level FROM person 
                JOIN access ON access.id = person.access_id 
                WHERE access.access_level > 0 AND`;
  let search = req.query;
  let searchFields = [];
  let fieldCounter = 1;
  if(search.searchBy) {
    sqlText += `(person.lastname = $${fieldCounter} OR person.email = $${fieldCounter}) `;
    fieldCounter++;
    searchFields.push(search.searchBy);
  };
  if(search.level && search.searchBy) {
    sqlText += `AND person.access_id = $${fieldCounter} `;
    fieldCounter++;
    searchFields.push(search.level);
  } else if (search.level) {
    sqlText += `person.access_id = $${fieldCounter} `;
    fieldCounter++;
    searchFields.push(search.level);
  };
  if(search.sortBy) {
    sqlText += `ORDER BY $${fieldCounter};`;
    searchFields.push(search.sortBy)
  } else {
    sqlText += `ORDER BY person.date_added DESC;`;
  };
  pool.query(sqlText, searchFields)
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.get('/deactivated', (req,res) => {
  pool.query(`SELECT person.firstname, person.lastname, person.email, person.id, 
            person.access_id, access.access_type, access.access_level 
            FROM person JOIN access ON access.id = person.access_id
            WHERE access.access_level = 0;`)
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.get('/pendingRequests', (req,res) => {
  pool.query(`SELECT person.firstname, person.lastname, person.email, person.id, 
            person.access_id, access.access_type, access.access_level, client_request.id as request_id 
            FROM client_request 
            JOIN person ON client_request.person_id = person.id
            JOIN access ON access.id = person.access_id;`)
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