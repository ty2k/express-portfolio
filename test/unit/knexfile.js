'use strict'

const assert = require('assert')
const knexfile = require('../../knexfile')

// Test for presence and validity of database config Knexfile
describe('Knexfile.js database configuration', () => {
  it('is present', () => {
    assert(knexfile)
  })
  it('contains a "development" settings object', () => {
    assert(knexfile && knexfile.development)
  })
  it('contains a "production" settings object', () => {
    assert(knexfile && knexfile.production)
  })
})
