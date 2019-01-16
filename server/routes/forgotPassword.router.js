const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const encryptLib = require('../modules/encryption');

const crypto = require('crypto');
const nodemailer = require('nodemailer');

// Checks if email exists in database, creates token, sends email with token
// and saves the token in database
router.post('/', (req, res) => {
  if (req.body.email === '') {
    res.json('email required');
  }
  pool.query(`SELECT id, email FROM person WHERE email = $1`, [req.body.email])
  .then(user => {
    if (user.rows[0] === undefined) {
      res.json('email not in db');
    } else {
      const token = crypto.randomBytes(20).toString('hex');
      pool.query(`UPDATE person SET password_reset_token = '${token}', password_reset_expires = 'tomorrow' WHERE id = ${user.rows[0].id}`);
      
      // THESE CONST SECTIONS (transporter, mailOptions) NEED TO BE CONFIGURED FOR FORGOT 
      // PASSWORD TO FUNCTION. REFER TO DOCS FOR DETAILS.
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: `${process.env.EMAIL_ADDRESS}`,
          pass: `${process.env.EMAIL_PASSWORD}`,
        },
      });

      const mailOptions = {
        from: `demoforgroupproject@gmail.com`,
        to: `${user.rows[0].email}`,
        subject: `Link To Reset Password`,
        text:
          `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n` +
          `http://localhost:3000/#/reset/${token}\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };


      transporter.sendMail(mailOptions, function(err, response) {
        if (err) {
          console.error('there was an error: ', err);
        } else {
          res.status(200).json('recovery email sent');
        }
      });
    }
  })
  .catch((err) => {
    res.sendStatus(500);
  })
});

// checks that token is valid and not expired
router.get('/', (req,res) => {
  pool.query(`SELECT username FROM person WHERE password_reset_token = $1 AND NOW() < password_reset_expires;`, [req.query.passwordResetToken])
  .then(user => {
    if(user.rows[0] == undefined) {
      res.json('password reset link is invalid or has expired');
    } else {
      res.status(200).send({
        username: user.rows[0].username,
        message: 'password reset link ok',
      });
    }
  })
  .catch(() => {
    res.status(500).send({message: 'no-go'});
  })
});

// update password and clears token information
router.put('/', (req, res) => {
  const password = encryptLib.encryptPassword(req.body.password);
  const username  = req.body.username;
  const token = req.body.token;
  pool.query(`UPDATE person SET password = $1, password_reset_token = null, password_reset_expires = null 
            WHERE username = $2 AND password_reset_token = $3`, [password, username, token])
  .then(() => {
    res.status(200).send({message: 'password updated'});
  })
  .catch(() => {
    res.sendStatus(500);
  });
});

module.exports = router;