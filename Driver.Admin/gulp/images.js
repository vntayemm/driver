'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

gulp.task('copyVendorImages', () => {
  return gulp
    .src([
      path.join(conf.wiredep.directory, '**/ammap/dist/ammap/images/**/*'),
      path.join(conf.wiredep.directory, '**/amcharts/dist/amcharts/images/**/*'),
      path.join(conf.wiredep.directory, '**/ionrangeslider/img/**/*'),
      path.join(conf.wiredep.directory, '**/jstree/dist/themes/**/*'),
      path.join(conf.wiredep.directory, '**/leaflet/dist/images/**/*')
    ])
    .pipe(gulp.dest(path.join(conf.paths.tmp, 'serve', '/assets/img/theme/vendor')));
});

