'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

gulp.task('fonts', () => {
  return gulp
    .src(path.join(conf.paths.src, '**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});
