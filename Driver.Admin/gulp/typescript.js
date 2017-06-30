'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

var typescript = require('gulp-typescript'),
    tscConfig = require('./../tsconfig.json');

gulp.task('typescript', () => {
    return gulp
        .src(path.join(conf.paths.src, conf.file.typescript))
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest(path.join(conf.paths.dist, 'app/')));
});