'use strict'

const express = require('express')
const router = express.Router()
const moment = require('moment')
const opentype = require('opentype.js')

const DAY_COUNT_START = process.env.DAY_COUNT_START
const DAY_COUNT_TOTAL = process.env.DAY_COUNT_TOTAL

var fontRegular = opentype.loadSync('public/fonts/NewsCycle-Regular.ttf')
// var fontBold = opentype.loadSync('public/fonts/NewsCycle-Bold.ttf')

// GET route to signature API
router.get('/signature.svg', (req, res) => {
  const dayCount = moment().diff(moment(DAY_COUNT_START.split('-')), 'days')
  const dayDiff = fontRegular.getPath(`Day ${dayCount} of ${DAY_COUNT_TOTAL}`, 0, 18, 18).toSVG()
  const signature = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="140"
      height="22"
      >
      ${dayDiff}
    </svg>`
  res.setHeader('Content-Type', 'image/svg+xml')
  res.status(200).send(signature)
})

module.exports = router
