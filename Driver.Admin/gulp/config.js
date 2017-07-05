var gutil = require('gulp-util');

exports.global = {
    app: 'src/app/',
    src: 'src/',
    dist: 'dist/',
    tmp: 'tmp/',
    tmpApp: 'tmp/app/',
    e2e: 'e2e/',
    test: 'src/test/'
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
        html: global.src + '**/*.html',
        style: global.app + '**/*.{css, scss, less}',
        js: '**/*.js',
        ts: global.app + '**/!(*.spec)+(.ts)',
        typing: global.src + 'manual_typings/**/*.d.ts',
        font: global.app + '**/*.{eot,svg,ttf,woff,woff2}',
        index: global.src + 'index.html',
        systemjs: global.src + 'systemjs.conf.js',
        maincss: global.src + 'styles.css'},
    testFile: {
        ts: global.app + '**/*.spec.ts',
        unit: [global.app + '**/*.spec.ts'],
        e2e: [global.e2e + '**/*.ts'],
        helper: [global.test + 'test-helpers/**/*.ts']
    }
};

exports.errorHandler = (title) => {
    'use strict';

    return (err) => {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
