var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

var util = require('gulp-util'),
    cssnano = require('gulp-cssnano');

gulp.task('fonts', () => {
    return gulp
        .src(config.project.src.styles + config.project.file.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.project.dist.styles));
});

gulp.watch('watch-fonts', () => {
    gulp.watch(config.project.src.styles + config.project.file.style, ['sass']);
});

gulp.task('clean-sass', () => {
    return del([config.project.dist.styles + config.project.file.style]);
});