'use strict'

const assert = require('assert')
const fs = require('fs')
const packageJson = require('../../package.json')
const changeLog = fs.readFileSync('./CHANGELOG.md', 'utf-8')

// Test that package.json version and highest CHANGELOG.md version match
describe('Documentation version freshness', () => {
  const verP = packageJson.version

  // This assumes CHANGELOG will always have the most recent version at the top
  // of the file as a ## heading, which follows Semantic Versioning.
  const verC = changeLog.substring(changeLog.indexOf('## [') + 4, changeLog.indexOf('] - 20'))

  it(`package.json v${verP} should match CHANGELOG.md v${verC}`, () => {
    if (verP === verC) {
      assert(true)
    } else {
      assert(false)
    }
  })
})
