'use strict'

const assert = require('assert')
const fs = require('fs')
const seeds = fs.readdirSync('./db/seeds')

// Test for presence of seed file(s)
describe('Knex database seed file(s)', () => {
  it('at least one exists', () => {
    assert(seeds && seeds.length > 0)
  })

  if (seeds && seeds.length > 0) {
    seeds.forEach((seedFile) => {
      let seed = require(`../../db/seeds/${seedFile}`)

      // Test for presence of "seed" function
      it(`seed file ${seedFile} contains a "seed" function`, () => {
        if (seed.seed && typeof seed.seed === 'function') {
          assert(true)
        } else {
          assert(false)
        }
      })
    })
  }
})
