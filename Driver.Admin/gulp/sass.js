var gulp = require('gulp'),
    del = require('del'),
    config = require('./config'),
    
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),

    style = config.global.app + config.global.format.style,
    html = config.global.app + config.global.format.html,
    dist = config.project.dist.styles;

// Static Server + watching scss/html files
gulp.task('watch-sass', ['sass'], () => {

    browserSync.init({
        server: config.global.app
    });

    gulp.watch(style, ['sass']);
    gulp.watch(html)
        .on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', () => {
    return gulp.src(style)
        .pipe(sass())
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});