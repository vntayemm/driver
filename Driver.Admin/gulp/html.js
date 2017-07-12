var gulp = require('gulp'),
    del = require('del'),   
    config = require('./config');

var browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    tsify = require('tsify');

var watchedBrowserify = watchify(browserify({
    basedir: '.',
    debug: true,
    entries: [config.project.file.main],
    cache: {},
    packageCache: {}

}).plugin(tsify));

gulp.task('copy-html', () => {
    return gulp.src(config.global.src + config.global.format.html)
        .pipe(gulp.dest(config.global.dist));
});

gulp.task('html', ['copy-html'], function () {
    return watchedBrowserify
    .bundle()   
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.global.dist));
});