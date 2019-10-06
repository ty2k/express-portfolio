'use strict'

const assert = require('assert')
const fs = require('fs')
const packageJson = require('../../package.json')
const packageLock = require('../../package-lock.json')
const changeLog = fs.readFileSync('./CHANGELOG.md', 'utf-8')

// Test that versions in package.json, package-lock.json, and CHANGELOG.md match
describe('Version freshness', () => {
  const verP = packageJson.version
  const verL = packageLock.version

  // This assumes CHANGELOG will always have the most recent version at the top
  // of the file as a ## heading, which follows Semantic Versioning.
  const verC = changeLog.substring(changeLog.indexOf('## [') + 4, changeLog.indexOf('] - 20'))

  it(`package.json v${verP} should match package-lock.json v${verL}`, () => {
    if (verP === verL) {
      assert(true)
    } else {
      assert(false)
    }
  })

  it(`package.json v${verP} should match CHANGELOG.md v${verC}`, () => {
    if (verP === verC) {
      assert(true)
    } else {
      assert(false)
    }
  })

  it(`package-lock.json v${verL} should match CHANGELOG.md v${verC}`, () => {
    if (verL === verC) {
      assert(true)
    } else {
      assert(false)
    }
  })
})
