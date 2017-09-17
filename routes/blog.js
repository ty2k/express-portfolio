'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../db').handle;
const moment = require('moment');

router.get('/', function(req, res) {
  knex()('posts')
    .select('*')
    .then((results) => {
      if (results.length === 0) {
        res.status(200).send('No blogs yet');
        return;
      }
      let templateVars = {
        posts: results
      }
      res.render("blog-index", templateVars);
    });
});

router.get('/:slug', function (req, res) {
  knex()('posts')
    .select('*')
    .where({
      'posts.slug': req.params.slug
    })
    .then((results) => {
      if (results.length === 0) {
        res.status(404).send('No blog post by that name');
        return;
      }
      let templateVars = {
        post: results[0],
        timeCreated: moment(results[0].time_created_at).format('MMMM D, YYYY')
      }
      res.render("blog", templateVars);
    });
});

module.exports = router;
