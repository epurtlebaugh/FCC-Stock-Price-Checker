const chaiHttp = require('chai-http');
const chai = require('chai');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test('Viewing one stock: GET request to /api/stock-prices/', function(done) {
        chai
            .request(server)
            .get('/api/stock-prices?stock=GOOG')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
    test('Viewing two stocks: GET request to /api/stock-prices/', function(done) {
        chai
           .request(server)
           .get('/api/stock-prices?stock=GOOG&stock=MSFT')
           .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
    test('Viewing one stock and liking it: GET request to /api/stock-prices/', function(done) {
        chai
            .request(server)
            .get('/api/stock-prices?stock=GOOG&like=true')
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
    test('Viewing the same stock as last test and liking it again(twice): GET request to /api/stock-prices/', function(done){
        chai
           .request(server)
           .get('/api/stock-prices?stock=GOOG&like=true')
           .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
    test('Viewing two stocks and liking one: GET request to /api/stock-prices/', function(done) {
        chai
           .request(server)
           .get('/api/stock-prices?stock=GOOG&stock=MSFT&like=true')
           .end(function(err, res) {
                assert.equal(res.status, 200);

                done();
            });
    });
    


});
