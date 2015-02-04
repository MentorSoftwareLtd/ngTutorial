var gulp = require('gulp');
var browserify = require('browserify');
var vtransform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var ngAnnotate   = require('gulp-ng-annotate');

gulp.task('browserify', function () {
    var browserified = vtransform(function(filename) {
        var b = browserify(filename);
        //b.transform(ngAnnotate);
        return b.bundle();
    });

    var bundler = browserify('./src/js/app.js');
    //bundler.transform(ngAnnotate);
    var stream = bundler.bundle();

    return gulp.src('./src/js/app.js')
        //.pipe(ngAnnotate())
    //return stream
        //.pipe(source('output.js'))
        .pipe(browserified)
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(gulp.dest('build/js/'));

 });