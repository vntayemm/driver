'use strict';

var gulp = require('gulp'),
    del = require('del'),   
    config = require('./config');

var browserify = require("browserify"),
    source = require('vinyl-source-stream'),
    tsify = require("tsify");

gulp.task("copy-html", function () {
    return gulp.src(config.global.src + config.global.format.html)
        .pipe(gulp.dest("dist"));
});

gulp.task("html", ["copy-html"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
});