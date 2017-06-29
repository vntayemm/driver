'use strict';

var gulp = require('gulp');

gulp.task('build', ['typescript', 'javascript', 'css', 'html'], () => {
    console.log('build completed');
});
