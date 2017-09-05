'use strict';

// Server setup
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// GET route to index
app.get('/', (req, res) => {
  res.render('index');
});

// POST route from contact form
app.post('/contact', function (req, res) {
  var mailOpts, smtpTrans;
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  });
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function (error, response) {
    console.log(response);
    if (error) {
      res.render('contact-failure');
    }
    else {
      res.render('contact-success');
    }
  });
});

// Persistent Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
