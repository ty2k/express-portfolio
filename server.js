'use strict';

// Server setup
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const sass = require('node-sass-middleware');
const PORT = process.env.PORT || 3000;
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/styles', sass({
  src: __dirname + '/styles',
  dest: __dirname + '/public/styles',
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static('public'));
app.use((req, res, next) => {
  res.locals.googleAnalyticsId = GA_TRACKING_ID;
  next();
});

// For production (Heroku) http:// requests, redirect to https://
if (app.get('env') === 'production') {
  app.use((req, res, next) => {
    if (req.header('X-Forwarded-Proto') !== 'https') {
      res.redirect(`https://${req.header('host').replace(/^www\./, '')}${req.url}`);
    } else {
      next();
    }
  });
}

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
