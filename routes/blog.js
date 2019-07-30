'use strict'

const express = require('express')
const router = express.Router()
const knex = require('../db').handle
const moment = require('moment')

// GET route to blog index with a list of posts
router.get('/', (req, res) => {
  knex()('posts')
    .select('*')
    .then((results) => {
      const templateVars = {
        posts: results
      }
      res.render('blog-index', templateVars)
    })
    .catch((error) => {
      console.log(error)
      res.render('blog-index')
    })
})

// GET route to a specific blog post using its slug
router.get('/:slug', (req, res) => {
  knex()('posts')
    .select('*')
    .where({ 'posts.slug': req.params.slug })
    .then((results) => {
      if (results.length === 0) {
        knex()('posts')
          .select('*')
          .then((results) => {
            const templateVars = {
              posts: results,
              isBlogSearch: true
            }
            res.status(404).render('404', templateVars)
          })
      } else {
        const templateVars = {
          post: results[0],
          timeCreated: moment(results[0].time_created_at).format('MMMM D, YYYY')
        }
        res.render('blog', templateVars)
      }
    })
    .catch((error) => {
      console.log(error)
      res.status(404).render('404', { isBlogSearch: false })
    })
})

module.exports = router
