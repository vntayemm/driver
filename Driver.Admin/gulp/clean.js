var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

gulp.task('clean', () => {
    return del([config.global.dist, config.global.tmp]);
});
