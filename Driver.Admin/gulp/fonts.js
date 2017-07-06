
var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

gulp.task('fonts', () => {
    gulp
        .src(config.project.src.fonts + config.global.format.font)
        .pipe(gulp.dest(config.project.dist.fonts));
    gulp
        .src(['node_modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest(config.project.dist.fonts));
});

gulp.task('clean-fonts', () => {
    return del([config.project.dist.fonts + config.global.format.font]);
});

/**
gulp.watch('watch-fonts', () => {
    gulp.watch(config.project.src.fonts + config.global.format.font, []);
});
 */
 