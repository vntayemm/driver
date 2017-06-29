'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

var $ = require('gulp-load-plugins')({
        pattern: ['del']});

gulp.task('clean', (done) => {
    return $.del([
        path.join(conf.paths.dist, '/'), 
        path.join(conf.paths.tmp, '/')]);
});