var gulp = require('gulp'),
    fs = require('fs-extra'),
    util = require('gulp-util');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
fs.readdirSync('./gulp').filter((file) => {
    return (/\.(js|coffee)$/i).test(file);
}).map((file) => {
    require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', [], () => {
    return util.log('gulp file started');
}).on('stop', () => {
    process.exit();
});
