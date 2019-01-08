const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const crypto = require('crypto');
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  if (req.body.email === '') {
    res.json('email required');
  }
  console.log(req.body.email);
  pool.query(`SELECT id, email FROM person WHERE email = $1`, [req.body.email])
  .then(user => {
    if (user.rows[0] === null) {
      console.log('email not in database');
      res.json('email not in db');
    } else {
      console.log('IN ELSE', user.rows[0]);
      const token = crypto.randomBytes(20).toString('hex');
      const expires = Date.now() + 36000;
      pool.query(`UPDATE person SET password_reset_token = ${token}, password_reset_expires = ${expires} WHERE id = ${user.rows[0].id}`);
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
          `http://localhost:3000/reset/${token}\n\n` +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };

      console.log('sending mail');

      transporter.sendMail(mailOptions, function(err, response) {
        if (err) {
          console.error('there was an error: ', err);
        } else {
          console.log('here is the res: ', response);
          res.status(200).json('recovery email sent');
        }
      });
    }
  });
});

router.get('/', (req,res) => {
  
})

module.exports = router;