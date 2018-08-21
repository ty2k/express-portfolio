'use strict'

const assert = require('assert')
const fs = require('fs')
const migrations = fs.readdirSync('./db/migrations')

// Test for presence of migration file(s)
describe('Knex database migration file(s)', () => {
  it('at least one exists', () => {
    assert(migrations && migrations.length > 0)
  })

  if (migrations && migrations.length > 0) {
    migrations.forEach((migrationFile) => {
      let migration = require(`../../db/migrations/${migrationFile}`)

      // Test for presence of "up" roll forward function
      it(`migration file ${migrationFile} can be rolled forward`, () => {
        if (migration.up && typeof migration.up === 'function') {
          assert(true)
        } else {
          assert(false)
        }
      })

      // Test for presence of "down" roll back function
      it(`migration file ${migrationFile} can be rolled back`, () => {
        if (migration.down && typeof migration.down === 'function') {
          assert(true)
        } else {
          assert(false)
        }
      })
    })
  }
})
