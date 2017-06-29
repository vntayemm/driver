'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
    return event.type === 'changed';
}

gulp.task('watch', ['inject'], () => {
    gulp.watch(
        [path.join(conf.paths.src, '/*.html')], 
        ['inject-reload']);

    gulp.watch([
        path.join(conf.paths.src, '/sass/**/*.css'),
        path.join(conf.paths.src, '/sass/**/*.scss')
    ], (event) => {
        if(isOnlyChange(event)) {
            gulp.start('styles-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.ts'), (event) => {
        if (isOnlyChange(event)) {
            gulp.start('typescript-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    //javascript
    gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), (event) => {
        if(isOnlyChange(event)) {
            gulp.start('scripts-reload');
        } else {
            gulp.start('inject-reload');
        }
    });

    gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), (event) => {
        browserSync.reload(event.path);
    });
});
