'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

gulp.task('css', ()=>{
  return gulp
    .src(path.join(conf.paths.src, '/**/*.css'))
    .pipe(gulp.dest(path.join(conf.paths.dist, '/')));
});