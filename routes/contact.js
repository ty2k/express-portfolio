'use strict'

const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

// POST route from contact form
router.post('/', (req, res) => {
  let mailOpts, smtpTrans
  smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS
    }
  })
  mailOpts = {
    from: req.body.name + ' &lt;' + req.body.email + '&gt;',
    to: GMAIL_USER,
    subject: 'New message from contact form at tylerkrys.ca',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }
  smtpTrans.sendMail(mailOpts, (error) => {
    if (error) {
      console.log('Failed contact form attempt: ')
      console.log(mailOpts)
      res.render('contact-failure')
    }
    else {
      res.render('contact-success')
    }
  })
})

module.exports = router
