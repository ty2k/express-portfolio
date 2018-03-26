'use strict'

const knex = require('knex')
const knexLogger = require('knex-logger')

let knexHandle

// Setup Knex connection
const init = (app, knexConfig) => {
  knexHandle = knex(knexConfig)
  app.use(knexLogger(knexHandle))
  return knexHandle
}

// Get a reference to Knex connection
const handle = () => {
  return knexHandle
}

module.exports = { init, handle }
