'use strict'

const assert = require('assert')
const ejsLint = require('ejs-lint')
const fs = require('fs')
const views = fs.readdirSync('./views')
const partials = fs.readdirSync('./views/partials')

// Test linting of ejs files in ./views and ./view/partials
describe('Linting in EJS views and partials', () => {
  if (views && views.length > 0) {
    views.forEach((viewFilename) => {
      if (viewFilename.includes('.ejs')) {
        const view = fs.readFileSync(`./views/${viewFilename}`, 'utf8')

        // ejs-lint returns an error object if errors found, or undefined if not
        const err = ejsLint(view)

        // Test linting of EJS views in ./views
        it(`EJS view file ${viewFilename} passes ejs-lint`, () => {
          if (!err) {
            assert(true)
          } else {
            assert(false)
          }
        })
      }
    })
  }

  if (partials && partials.length > 0) {
    partials.forEach((partialFilename) => {
      if (partialFilename.includes('.ejs')) {
        const partial = fs.readFileSync(`./views/partials/${partialFilename}`, 'utf8')
        const err = ejsLint(partial)

        // Test linting of EJS partials in ./views/partials
        it(`EJS partial file ${partialFilename} passes ejs-lint`, () => {
          if (!err) {
            assert(true)
          } else {
            assert(false)
          }
        })
      }
    })
  }
})
