'use strict';

var gulp = require('gulp'),
    conf = require('./conf');

var $ = require('gulp-load-plugins')({
        pattern: ['del']});

gulp.task('clean', (done) => {
    return $.del([conf.paths.dist, conf.paths.tmp]);
});