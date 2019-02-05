const server = require('../server.js');
const chaiHttp = require('chai-http');
const chai = require('chai');
const should = chai.should();

chai.use(chaiHttp);

describe('/', () => {
  it('should serve up static HTML', done => {
    chai.request(server)
      .get('/')
      .end((error, response) => {
        response.should.have.status(200);
        response.should.be.html;
        done();
      })
  })
})