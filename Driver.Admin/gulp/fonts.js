'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

gulp.task('fonts', () => {
    return gulp
        .src(path.join(conf.paths.src, conf.file.fonts))
        .pipe(gulp.dest(path.join(conf.paths.dist, 'fonts/')));
});
