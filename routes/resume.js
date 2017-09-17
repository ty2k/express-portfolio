'use strict';

const express = require('express');
const router = express.Router();
const RESUME_LINK = process.env.RESUME_LINK;

// GET route to resume
router.get('/', function (req, res) {
  res.redirect(RESUME_LINK);
});

module.exports = router;
