var gutil = require('gulp-util');

exports.paths = {
    src: 'src/',
    dist: 'dist/',
    devDist: 'devDist/',
    tmp: '.tmp/',
    e2e: 'e2e/'
};

exports.file = {
    html: '/**/*.html',
    styles: '/**/*.{css, scss, less}',
    javascript: '**/*.js',
    typescript: '/**/*.ts',
    fonts: '**/*.{eot,svg,ttf,woff,woff2}'
};

exports.wiredep = {
    exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/require\.js/],
    directory: 'bower_components'
};

exports.errorHandler = (title) => {
    'use strict';

    return (err) => {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};
