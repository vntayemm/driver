'use strict';

var gulp = require('gulp'),
    del = require('del'),   
    config = require('./config');

var ts = require('gulp-typescript'),
    tsProject = ts.createProject('tsconfig.json');

gulp.task('ts', ['clean-ts'], () => {
    return tsProject
        .src()
        .pipe(tsProject())
        .js.pipe(gulp.dest(config.global.dist));
});

gulp.task('clean-ts', () => {
    del([config.global.tmp]);
});

gulp.watch('wacth-ts', () => {
    return gulp.watch(tsFiles, (file) => {
        util.log('compiling' + file.path + '---');
        return compileTs(file.path, true);
    })
});
