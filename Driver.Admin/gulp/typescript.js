'use strict';

var gulp = require('gulp');
var del = require('del');
var path = require('path');
var conf = require('./conf');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json');
var tslint = require('gulp-tslint');


/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src(path.join(conf.paths.src, '/**/*.ts'),)
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['tslint'], () => {
    let tsResult = gulp.src(path.join(conf.paths.src, '/**/*.ts'),)
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.', {sourceRoot: conf.paths.src}))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', () => {
    return gulp.src([
        path.join(conf.paths.src, '!**/*.ts')    
    ])
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
});

/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources'], () => {
    console.log('Building the project ...');
});