'use strict'

// Server
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')

// Environment
const ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3000
const GA_TRACKING_ID = process.env.GA_TRACKING_ID
const KEY_1 = process.env.COOKIE_SESSION_KEY_1
const KEY_2 = process.env.COOKIE_SESSION_KEY_2

// Database
const db = require('./db')
const knexConfig = require('./knexfile')
db.init(app, knexConfig[ENV])
const knex = db.handle()
if (ENV === 'development') { knex.on('query', console.log) }

// Packages
const bodyParser = require('body-parser')
const compression = require('compression')
const cookieSession = require('cookie-session')
const helmet = require('helmet')
const minifyHTML = require('express-minify-html-2')
const sass = require('node-sass-middleware')

// Routes
const adminRoutes = require('./routes/admin')
const blogRoutes = require('./routes/blog')
const contactRoutes = require('./routes/contact')
const resumeRoutes = require('./routes/resume')

// Middleware
app.set('view engine', 'ejs')
app.use(helmet())
app.use(helmet.contentSecurityPolicy({
  directives: {
    'connect-src': ['\'self\''],
    defaultSrc: ['\'none\''],
    'font-src': ['\'self\''],
    'form-action': ['\'self\''],
    'img-src': [
      '\'self\'',
      'https://www.google-analytics.com/'
    ],
    'script-src': [
      '\'self\'',
      '\'unsafe-inline\'',
      'https://www.google-analytics.com/analytics.js'
    ],
    'style-src': ['\'self\'']
  }
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(cookieSession({
  name: 'session',
  keys: [KEY_1, KEY_2]
}))
app.use(express.static('public'))
app.use((req, res, next) => {
  res.locals.userId = req.session.userId
  res.locals.googleAnalyticsId = GA_TRACKING_ID
  next()
})
app.use('/styles', sass({
  src: path.join(__dirname, '/styles'),
  dest: path.join(__dirname, '/public/styles'),
  debug: true,
  outputStyle: 'compressed'
}))
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
}))

// Imported routes from ./routes directory
app.use('/admin', adminRoutes)
app.use('/blog', blogRoutes)
app.use('/contact', contactRoutes)
app.use('/resume', resumeRoutes)

// For production http:// requests, redirect to https://
if (ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('X-Forwarded-Proto') !== 'https') {
      res.redirect(`https://${req.header('host').replace(/^www\./, '')}${req.url}`)
    } else {
      next()
    }
  })
}

// GET route to index
app.get('/', (req, res) => {
  knex('projects')
    .select(['*'])
    .orderBy('display_order', 'desc')
    .then((results) => {
      const templateVars = {
        projects: results
      }
      res.render('index', templateVars)
    })
    .catch((error) => {
      console.log(error)
      res.render('index')
    })
})

// Catch-all route to 404
app.use((req, res) => {
  res.status(404).render('404')
})

// Persistent Listener
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`)
})

module.exports = app
