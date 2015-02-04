'use strict';

var gulp   = require('gulp');
var karma  = require('gulp-karma');

gulp.task('unit', function() {
    return gulp.src('./thisdoesntexist')
        .pipe(karma({
            configFile: 'testnob/karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });

});
