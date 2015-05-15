/**
 * Created by mdylag on 20/03/15.
 */
var assert = require('assert');
var request = require('supertest');
var app = require('../../app');
var http = require('http');


describe('Test API routing', function() {
    var mock;

    before(function (done) {
        var port = 1277;
        app.set('port', port);
        server = http.createServer(app);
        server.listen(port, function (err) {
            return done(err);
            console.log('server started');
        });

        server.on('error', function (err) {
            console.log('Error', err);
        });

    });

    after(function (done) {
        server.close(function () {
            done();
        });    });


    it('Test /api/people', function(done){
        request(server).
           get('/api/people').
            expect(200).
            expect('Content-Type',/application\/json/).
            end(function(err, res) {
                //console.log('Res',res);
                done(err);
            }
        );

    });

})