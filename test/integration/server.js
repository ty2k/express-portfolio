'use strict'

process.env.NODE_ENV = 'test'
const app = require('../../server')
const request = require('supertest')

// Test REST routes
describe('Express application server', () => {
  let httpServer

  before((done) => {
    httpServer = require('http').createServer(app)
    httpServer.listen((err) => {
      if (err) {
        return done(err)
      }
      done()
    })
  })

  after((done) => {
    httpServer.close(done)
  })

  // GET route to /
  it('responds to GET / with status 200', (done) => {
    request(httpServer)
      .get('/')
      .expect(200, done)
  })

  // GET route to /blogs
  it('responds to GET /blog with status 200', (done) => {
    request(httpServer)
      .get('/blog')
      .expect(200, done)
  })

  // GET 404 catch-all route
  it('responds to GET /404-bad-url with status 404', (done) => {
    request(httpServer)
      .get('/404-bad-url')
      .expect(404, done)
  })
})
