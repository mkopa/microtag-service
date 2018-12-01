/* eslint no-undef: [0, "describe"] */

const request = require('supertest');
const app = require('../');
const stopServer = require('../').stop;

describe('GET /api/ping', (() => {
  it('respond with json containing a pong string', ((done) => {
    response = {
      success: true,
      message: 'pong',
    };
    request(app)
      .get('/api/ping')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect(JSON.stringify(response))
      .end(done);
  }));
}));

describe('/api/notFoundEndpoint', (() => {
  it('GET respond with json containing a 404 Not Found Error', ((done) => {
    response = {
      success: false,
      errors: ['Not found error'],
    };
    request(app)
      .get('/api/notFoundEndpoint')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .expect(JSON.stringify(response))
      .end(done);
  }));

  it('POST respond with json containing a 404 Not Found Error', ((done) => {
    response = {
      success: false,
      errors: ['Not found error'],
    };
    request(app)
      .post('/api/notFoundEndpoint')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .expect(JSON.stringify(response))
      .end(done);
  }));

  it('PUT respond with json containing a 404 Not Found Error', ((done) => {
    response = {
      success: false,
      errors: ['Not found error'],
    };
    request(app)
      .post('/api/notFoundEndpoint')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .expect(JSON.stringify(response))
      .end(done);
  }));

  it('DELETE respond with json containing a 404 Not Found Error', ((done) => {
    response = {
      success: false,
      errors: ['Not found error'],
    };
    request(app)
      .post('/api/notFoundEndpoint')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(404)
      .expect(JSON.stringify(response))
      .end(done);
  }));
}));

after(stopServer);
