const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    
});


router.post('/', (req, res) => {

});

router.put('/', (req,res) => {
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

router.put('/currentUser', (req,res) => {
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

router.delete('/threesixty/:id', (req,res) => {
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

router.delete('/:id', (req,res) => {
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