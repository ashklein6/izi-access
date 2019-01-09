const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const encryptLib = require('../modules/encryption');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticated, (req, res) => {
  const newPassword = encryptLib.encryptPassword(req.body.newPassword);
  const oldPassword = req.body.oldPassword;
  const username = req.body.username;
  pool.query(`SELECT * FROM person WHERE username = $1;`, [username])
  .then(user => {
    if(user.rows[0] && encryptLib.comparePassword(oldPassword, user.rows[0].password)){
      pool.query(`UPDATE person SET password = $1 WHERE username = $2;`, [newPassword, username]);
      res.status(201).send({message: 'Password change confirmed'});
    } else {
      res.send({message: 'Cannot verify credentials'});
    };
  })
  .catch(() => {
    res.sendStatus(500);
  });
});

module.exports = router;