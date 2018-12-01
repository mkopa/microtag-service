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

after(stopServer);
