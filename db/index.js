'use strict';

const knex = require('knex');
const knexLogger = require('knex-logger');

let knexHandle;

// Setup Knex connection
const init = function(app, knexConfig) {
  knexHandle = knex(knexConfig);
  app.use(knexLogger(knexHandle));
  return knexHandle;
};

// Get a reference to Knex connection
const handle = function() {
  return knexHandle;
};

module.exports = { init, handle };
