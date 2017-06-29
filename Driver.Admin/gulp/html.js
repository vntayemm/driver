'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');
    
gulp.task('html', () => {
    return gulp
        .src(path.join(conf.paths.src, '/**/*.html'))
        .pipe(gulp.dest(conf.paths.dist + '/'));
});