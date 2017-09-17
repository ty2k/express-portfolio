'use strict';

// Server setup
require('dotenv').config();
const express = require('express');
const app = express();
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const sass = require('node-sass-middleware');
const knexConfig = require('./knexfile');
const db = require('./db');
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
const blogRoutes = require('./routes/blog');
const contactRoutes = require('./routes/contact');
const resumeRoutes = require('./routes/resume');

db.init(app, knexConfig[ENV]);
const knex = db.handle();

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

// Imported routes from ./routes directory
app.use('/blog', blogRoutes);
app.use('/contact', contactRoutes);
app.use('/resume', resumeRoutes);

// Persistent Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
