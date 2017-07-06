 
var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

var sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp
        .src(config.global.app + config.global.format.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.project.dist.styles));
});

gulp.task('clean-sass', () => {
    return del([config.project.dist.styles + config.global.format.style]);
});

gulp.watch('watch-sass', () => {
    gulp.watch(config.project.src.styles + config.global.format.style);
});
