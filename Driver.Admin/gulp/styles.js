'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

gulp.task('styles', () => {
  return gulp
    .src(path.join(conf.paths.src, '/**/*.{css, scss, less}'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});