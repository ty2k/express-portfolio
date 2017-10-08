'use strict';

// Server setup
require('dotenv').config();
const express = require('express');
const app = express();
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;
const GA_TRACKING_ID = process.env.GA_TRACKING_ID;
const KEY_1 = process.env.COOKIE_SESSION_KEY_1;
const KEY_2 = process.env.COOKIE_SESSION_KEY_2;
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieSession = require('cookie-session');
const db = require('./db');
const knexConfig = require('./knexfile');
const minifyHTML = require('express-minify-html');
const sass = require('node-sass-middleware');
const adminRoutes = require('./routes/admin');
const blogRoutes = require('./routes/blog');
const contactRoutes = require('./routes/contact');
const resumeRoutes = require('./routes/resume');

db.init(app, knexConfig[ENV]);
const knex = db.handle();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'session',
  keys: [KEY_1, KEY_2]
}))
app.use(express.static('public'));
app.use((req, res, next) => {
  res.locals.userId = req.session.userId;
  res.locals.googleAnalyticsId = GA_TRACKING_ID;
  next();
});
app.use('/styles', sass({
  src: __dirname + '/styles',
  dest: __dirname + '/public/styles',
  debug: true,
  outputStyle: 'compressed'
}));
app.use(compression());
app.use(minifyHTML({
  override: true,
  exception_url: false,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
  }
}));

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
  knex('projects')
    .select(['*'])
    .orderBy('display_order', 'desc')
    .then((results) => {
      let templateVars = {
        projects: results
      };
      res.render('index', templateVars);
    });
});

// Imported routes from ./routes directory
app.use('/admin', adminRoutes);
app.use('/blog', blogRoutes);
app.use('/contact', contactRoutes);
app.use('/resume', resumeRoutes);

// Persistent Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
