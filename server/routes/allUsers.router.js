const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { employeesOnly } = require('../modules/employeesOnly');

router.get('/', employeesOnly, (req, res) => {
  console.log('req.user', req.user);
  pool.query(`SELECT person.firstname, person.lastname, person.email, person.id, 
            person.access_id, person.notes, access.access_type, access.access_level, 
            threesixty.name as threesixty, threesixty_user.id as connected_360_id 
            FROM person 
            JOIN access ON access.id = person.access_id
            FULL OUTER JOIN threesixty_user ON threesixty_user.user_id = person.id
            LEFT JOIN threesixty ON threesixty.id = threesixty_user.threesixty_id
            WHERE access.access_level > 0 ORDER BY person.date_added DESC;`)
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

// this route searches users based on a variety of criteria
// first name, last name, or email, and/or level
// and can sort them responses by a preselected category
router.get('/search', employeesOnly, (req,res) => {
  let sqlText = `SELECT person.firstname, person.lastname, person.email, person.id,
                person.access_id, person.notes, access.access_type, access.access_level, 
                threesixty.name as threesixty, threesixty_user.id as connected_360_id
                FROM person 
                JOIN access ON access.id = person.access_id
                FULL OUTER JOIN threesixty_user ON threesixty_user.user_id = person.id
                LEFT JOIN threesixty ON threesixty.id = threesixty_user.threesixty_id 
                WHERE access.access_level > 0 `;
  let search = req.query;
  let searchFields = [];
  let fieldCounter = 1;
  if(search.searchBy) {
    sqlText += `AND (LOWER(person.firstname) ~~ LOWER($${fieldCounter}) OR LOWER(person.lastname) ~~ LOWER($${fieldCounter}) OR LOWER(person.email) ~~ LOWER($${fieldCounter})) `;
    fieldCounter++;
    searchFields.push('%' + search.searchBy + '%');
  };
  if(search.level) {
    sqlText += `AND person.access_id = $${fieldCounter} `;
    fieldCounter++;
    searchFields.push(search.level);
  };
  if(search.sortBy === 'person.firstname' || search.sortBy === 'person.lastname' || search.sortBy === 'person.email' || search.sortBy === 'person.access_id') {
    sqlText += `ORDER BY ${search.sortBy};`;
  } else {
    sqlText += `ORDER BY person.date_added DESC;`;
  };
  console.log(sqlText, searchFields);
  pool.query(sqlText, searchFields)
  .then((response) => {
    console.log(response.rows);
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.get('/deactivated', employeesOnly, (req,res) => {
  pool.query(`SELECT person.firstname, person.lastname, person.email, 
            person.id, person.access_id, person.notes, access.access_type, access.access_level, 
            threesixty.name as threesixty, threesixty_user.id as connected_360_id
            FROM person 
            JOIN access ON access.id = person.access_id
            FULL OUTER JOIN threesixty_user ON threesixty_user.user_id = person.id
            LEFT JOIN threesixty ON threesixty.id = threesixty_user.threesixty_id
            WHERE access.access_level = 0 ORDER BY person.date_added DESC;`)
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.get('/pendingRequests', employeesOnly, (req,res) => {
  pool.query(`SELECT person.firstname, person.lastname, person.email, person.id, 
            person.access_id, person.notes, access.access_type, access.access_level, 
            client_request.id as request_id, threesixty.name as threesixty,
            threesixty_user.id as connected_360_id
            FROM client_request 
            JOIN person ON client_request.person_id = person.id
            JOIN access ON access.id = person.access_id
            FULL OUTER JOIN threesixty_user ON threesixty_user.user_id = person.id
            LEFT JOIN threesixty ON threesixty.id = threesixty_user.threesixty_id
            WHERE person.id IS NOT NULL
            ORDER BY person.date_added DESC;`)
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.get('/threesixty', employeesOnly, (req, res) => {
  let threesixty = req.query.id;
  pool.query(`SELECT person.firstname, person.lastname, person.email, person.id, 
            person.access_id, person.notes, access.access_type, access.access_level, 
            threesixty.name as threesixty, threesixty_user.id as connected_360_id 
            FROM person 
            JOIN access ON access.id = person.access_id
            FULL OUTER JOIN threesixty_user ON threesixty_user.user_id = person.id
            LEFT JOIN threesixty ON threesixty.id = threesixty_user.threesixty_id
            WHERE threesixty.id = $1 ORDER BY person.date_added DESC;`, [threesixty])
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.get('/checkRequests', employeesOnly, (req,res) => {
  pool.query(`SELECT id FROM client_request;`)
  .then((response) => {
    if(response.rows[0]){
      res.send(true);
    } else {
      res.send(false);
    }
  })
  .catch(() => {
    res.sendStatus(500);
  })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;