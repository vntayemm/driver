'use strict';

var gulp = require('gulp'),
    path = require('path'),
    conf = require('./conf');

var browserSync = require('browser-sync');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['inject'], function () {

  //html
  gulp.watch([
    path.join(conf.paths.src, '/*.html'), 
    'bower.json'
    ], [
      'inject-reload'
    ]);

  //css
  gulp.watch([
    path.join(conf.paths.src, '/sass/**/*.css'),
    path.join(conf.paths.src, '/sass/**/*.scss')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  //typescript
  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.ts')
  ], function (event) {
    if (isOnlyChange(event)) {
      gulp.start('typescript-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  //javascript
  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.html')
  ], function(event) {
    browserSync.reload(event.path);
  });
});
