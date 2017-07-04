var gutil = require('gulp-util');

exports.root = {
    app: 'src/app/',
    src: 'src/',
    dist: 'dist/'
};

exports.project = {
    src: {
        styles: root.src + 'assets/styles/',
        images: src + 'assets/images/',
        fonts: src + 'assets/fonts/'},
    tmp: 'tmp/',
    e2e: 'e2e/',
    dist: {
        styles: dist + 'assets/',
        fonts: dist + 'fonts/'},
    file: {
        html: src + '**/*.html',
        style: app + '**/*.{css, scss, less}',
        js: '**/*.js',
        ts: app + '**/!(*.spec)+(.ts)',
        font: app + '**/*.{eot,svg,ttf,woff,woff2}',
        index: src + 'index.html',
        sysConf: src + 'systemjs.conf.js',
        mainStyle: src + 'styles.css'}
};

exports.errorHandler = (title) => {
    'use strict';

    return (err) => {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
