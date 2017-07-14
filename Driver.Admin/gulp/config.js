var gutil = require('gulp-util');

exports.global = {
    src: 'src/',
    app: 'src/app/',
    dist: 'dist/',
    tmp: 'tmp/',
    tmpApp: 'tmp/app/',
    e2e: 'e2e/',
    test: 'src/test/',
    helper: 'src/test/test-helpers/',
    format: {
        html: '**/*.html',
        style: '**/*.{css, scss, less}',
        js: '**/*.js',
        ts: '**/!(*.spec)+(.ts)',
        typing: 'manual_typings/**/*.d.ts',
        font: '**/*.{eot,svg,ttf,woff,woff2}',
        spec: '**/*.spec.ts'}
};

exports.project = {
    src: {
        styles: 'assets/styles/',
        images: 'assets/images/',
        fonts: 'assets/fonts/'},
    dist: {
        styles: 'assets/',
        fonts: 'fonts/'},
    file: {
        main: 'main.ts',
        index: 'index.html',
        systemjs: 'systemjs.conf.js',
        maincss: 'styles.css'}
};

exports.errorHandler = (title) => {
    'use strict';

    return (err) => {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
