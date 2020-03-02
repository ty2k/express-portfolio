'use strict'

const assert = require('assert')
const fs = require('fs')
const packageJson = require('../../package.json')
const packageLock = require('../../package-lock.json')
const changeLog = fs.readFileSync('./CHANGELOG.md', 'utf-8')
const nvmrc = fs.readFileSync('./.nvmrc', 'utf-8')
const travisYaml = fs.readFileSync('./.travis.yml', 'utf-8')

console.log(travisYaml)

// Test that versions in package.json, package-lock.json, and CHANGELOG.md match
describe('Version freshness', () => {
  const verP = packageJson.version
  const verL = packageLock.version

  // This assumes CHANGELOG will always have the most recent version at the top
  // of the file as a ## heading, which follows Semantic Versioning.
  const verC = changeLog.substring(changeLog.indexOf('## [') + 4, changeLog.indexOf('] - 20'))

  const verN = nvmrc.trim()

  // Rather that add a new package to parse the Travis YAML config,
  // just look for the version number as a substring.
  const verT = travisYaml.substring(travisYaml.indexOf('- "') + 3, travisYaml.length - 2)
  console.log('verT: ', verT)
  console.log('verN: ', verN)

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

  it(`.nvmrc Node v${verN} should match .travis.yml Node v${verT}`, () => {
    if (verN === verT) {
      assert(true)
    } else {
      assert(false)
    }
  })
})
