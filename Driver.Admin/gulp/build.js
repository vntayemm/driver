'use strict';

var gulp = require('gulp');

gulp.task('build', ()=>{
    gulp.start('typescript');
    gulp.start('javascript');
    gulp.start('css');
    gulp.start('html');
});
