/**
var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');



gulp.watch('watch-sass', () => {
    gulp.watch(config.project.src.styles + config.project.fileFormat.style, ['sass']);
});


 */