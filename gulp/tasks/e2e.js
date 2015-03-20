var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var server = require('gulp-express');

gulp.task('e2e', function(cb) {
    /*server.run({
        file: 'bin/www'
    });*/
    gulp.src(["/test/e2e/*spec.js"])
        .pipe(protractor({
            configFile: "test/e2e/conf.js",
            args: ['--baseUrl', 'http://127.0.0.1:3000']
        }))
        .on('error', function (e) {
            //server.stop();
            throw e
        })
        .on('end', function() {
            //server.stop();
            cb();
        });
});