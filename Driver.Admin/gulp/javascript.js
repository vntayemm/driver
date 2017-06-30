'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

gulp.task('javascript', () => {
    return gulp
        .src(path.join(conf.paths.src, conf.file.javascript))
        .pipe(gulp.dest(path.join(conf.paths.dist, 'app/')));
});
