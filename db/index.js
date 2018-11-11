'use strict'

const knex = require('knex')
let knexHandle

// Setup Knex connection
const init = (app, knexConfig) => {
  knexHandle = knex(knexConfig)
  return knexHandle
}

// Get a reference to Knex connection
const handle = () => {
  return knexHandle
}

module.exports = { init, handle }
