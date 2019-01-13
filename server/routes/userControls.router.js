const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const { employeesOnly } = require('../modules/employeesOnly');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const sqlText = `SELECT threesixty.name, threesixty.date, threesixty.id FROM threesixty
                  JOIN threesixty_user ON threesixty_user.threesixty_id = threesixty.id
                  JOIN person ON threesixty_user.user_id = person.id
                  WHERE person.id = $1;`
  const user = req.user.id;
  pool.query(sqlText, [user])
  .then((response) => {
    res.send(response.rows);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});


router.post('/', rejectUnauthenticated, (req, res) => {
  console.log(req.body);
  const sqlText = `INSERT INTO client_request (person_id, name, date) VALUES ($1, $2, $3);`
  const request = [req.body.data.user, req.body.data.iziName, req.body.data.date];
  pool.query(sqlText, request)
  .then(() => {
    res.sendStatus(200);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.post('/add', employeesOnly, (req,res) => {
  const sqlText = `INSERT INTO threesixty_user (user_id, threesixty_id) VALUES ($1, $2);`;
  const user = req.body.data.user;
  const threesixty = req.body.data.threesixty;
  pool.query(sqlText, [user, threesixty])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.put('/', employeesOnly, (req,res) => {
  const sqlText = `UPDATE person SET firstname = $1, lastname = $2, email = $3, 
                  access_id = $4, notes = $5 WHERE id = $6;`;
  const personUpdate = [
    req.body.data.firstname, 
    req.body.data.lastname, 
    req.body.data.email, 
    req.body.data.access_id, 
    req.body.data.notes, 
    req.body.data.id
  ];
  pool.query(sqlText, personUpdate)
  .then(() => {
    res.sendStatus(200);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

router.put('/currentUser', rejectUnauthenticated, (req,res) => {
  const sqlText = `UPDATE person SET firstname = $1, lastname = $2, email = $3 WHERE id = $4;`;
  const update = [
    req.body.data.firstName,
    req.body.data.lastName,
    req.body.data.email,
    req.body.data.id
  ];
  pool.query(sqlText, update)
  .then(() => {
    res.sendStatus(200);
  })
  .catch(() => {
    res.sendStatus(500);
  });
});

router.delete('/threesixty/:id', employeesOnly, (req,res) => {
  const sqlText = `DELETE FROM threesixty_user WHERE id = $1;`;
  const threesixtyId = req.params.id;
  pool.query(sqlText, [threesixtyId])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(() => {
    res.sendStatus(500);
  })
})

router.delete('/:id', employeesOnly, (req,res) => {
  const sqlText = `DELETE FROM client_request WHERE id = $1;`;
  const requestId = req.params.id;
  pool.query(sqlText, [requestId])
  .then(() => {
    res.sendStatus(200);
  })
  .catch(() => {
    res.sendStatus(500);
  })
});

module.exports = router;