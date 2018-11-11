'use strict'

const express = require('express')
const router = express.Router()
const knex = require('../db').handle
const bcrypt = require('bcrypt')

// GET route to /admin, admin panel landing page
router.get('/', (req, res) => {
  res.render('admin-panel')
})

// GET route to /admin/login, login landing page
router.get('/login', (req, res) => {
  res.render('admin-login')
})

// POST route to /admin/login, authentication attempt
router.post('/login', (req, res) => {
  knex()
    .select('*')
    .from('users')
    .where({ email: req.body.user })
    .then((results) => {
      if (results.length === 0) {
        res.status(401).send('Login failed')
        return
      }
      if (!bcrypt.compareSync(req.body.password, results[0].password)) {
        res.status(401).send('Login failed')
        return
      }
      req.session.userId = results[0].id
      res.redirect('/admin')
    })
})

// POST route to /admin/logout, end session
router.post('/logout', (req, res) => {
  req.session = null
  res.redirect('/admin/login')
})

module.exports = router
