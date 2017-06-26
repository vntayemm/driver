'use strict';

var gulp = require('gulp');
var del = require('del');
var path = require('path');
var conf = require('./conf');
const ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = ts.createProject('tsconfig.json');
var tslint = require('gulp-tslint');


/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src(path.json(conf.paths.src, '/**/*.ts'))
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['tslint'], () => {
    let tsResult = gulp.src(path.json(conf.paths.src, '/**/*.ts'))
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write('.', {sourceRoot: conf.paths.src}))
        .pipe(gulp.dest('build'));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task('resources', () => {
    return gulp.src([
        path.join(conf.paths.src, '!**/*.ts')    
    ])
    .pipe(gulp.dest('build'));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task('libs', () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**'
        ], {cwd: 'node_modules/**'}) /* Glob required here. */
        .pipe(gulp.dest('build/lib'));
});


/**
 * Build the project.
 */
gulp.task('build', ['compile', 'resources', 'libs'], () => {
    console.log('Building the project ...');
});