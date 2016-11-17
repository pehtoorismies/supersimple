import request from 'supertest';
import app from '../index.js';
 
describe('GET /', () => {
  it('respond with hello world', (done) => {
    request(app).get('/').expect('Hello World!', done);
  });
});