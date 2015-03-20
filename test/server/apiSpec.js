/**
 * Created by mdylag on 20/03/15.
 */
var assert = require('assert');
var request = require('supertest');
var app = require('../../app');

describe('Test API routing', function() {
    var mock;

    beforeEach(function (done) {
        //app = express();

        app.on('start', done);
        app.on('start',function() {
            console.log('start');
        })

        mock = app.listen(1337);
        //done();
    });

    afterEach(function (done) {
        mock.close(done);
    });

    //sync
    it('Test /api/people', function(done){
        request(mock).
            get('/api/people').
            expect(200,done).
            expect('Content-Type',/ala/).
            end(function(err, res) {
                console.log('Res',res);
            }
        );

    });
    //async
    it('Test people service', function(done){
        assert.equal(true, true);
        done();
    });

})