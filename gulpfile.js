'use strict';

require('./gulp');

var server = require('gulp-express');
var mocha = require('gulp-mocha');
var gulp =require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');

gulp.task('test:unit:server', function() {
  process.env.NODE_ENV='test';
  server.run('');
  return gulp.src(['test/server/**/*.spec.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        //should: require('should')
      }
    })).on('error', gutil.log);
});


gulp.task('default',['test:unit:server']);
