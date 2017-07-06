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
        styles: global.src + 'assets/styles/',
        images: global.src + 'assets/images/',
        fonts: global.src + 'assets/fonts/'},
    dist: {
        styles: global.dist + 'assets/',
        fonts: global.dist + 'fonts/'},
    file: {
        index: global.src + 'index.html',
        systemjs: global.src + 'systemjs.conf.js',
        maincss: global.src + 'styles.css'}
};

exports.errorHandler = (title) => {
    'use strict';

    return (err) => {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};