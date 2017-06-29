'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

var $ = require('gulp-load-plugins')(),
    _ = require('lodash'),
    wiredep = require('wiredep').stream,
    browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], ()=>{
  browserSync.reload();
});

gulp.task('inject', ['typescript', 'javascript', 'css', 'html'], ()=>{
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/main.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], {read: false});

  var injectScripts = gulp.src([
    path.join(conf.paths.src, '/assets/js/**/*.js'),
    path.join(conf.paths.src, '/app/**/*.module.js'),
    path.join(conf.paths.src, '/app/**/*.js'),
    path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
    path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
  ])
  .on('error', conf.errorHandler('AngularFilesort'));

  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp
    .src(path.join(conf.paths.src, '/index.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});