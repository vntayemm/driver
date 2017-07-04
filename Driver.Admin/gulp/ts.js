var gulp = require('gulp'),
    del = require('del'),
    config = require('./config');

var util = require('gulp-util'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps');

/* Initialize */
var typingFiles = [config.global.src + config.project.file.typing],
    tsUnitFiles = [].concat(config.project.testFile.unit, config.project.testFile.helper),
    tsFiles = [].concat(config.project.ts, tsUnitFiles);

/* Compile typescripts */
gulp.task('ts', ['clean-ts'], () => {
    return compileTs(tsFiles);
});

gulp.watch('ts-app', () => {
    return compileTs(config.project.ts);
});

gulp.task('ts-unit', () => {
    return compileTs(tsUnitFiles);
});

/* Watch */
gulp.watch('wacth-ts', () => {
    return gulp.watch(tsFiles, (file) => {
        util.log('compiling' + file.path + '---');
        return compileTs(file.path, true);
    })
});

/* Lint typescripts */
gulp.task('tslint', () => {
    return lintTs(tsFiles);
});

gulp.task('tslint-app', () => {
    return lintTs(config.project.file.ts);
});

gulp.task('tslint-unit', () => {
    return lintTs(tsUnitFiles);
});

/*clean*/
gulp.task('clean-ts', () => {
    return del([config.global.tmp]);
});

/*function */
function lintTs(files) {
    return gulp
        .src(tslint({ formatter: 'verbose' }))
        .pipe(tslint.report());
}

function compileTs(files, watchMode) {
    watchMode = watchMode || false;

    var tsProject = ts.createProject('tsconfig.json'),
        allFiles = [].concat(files, typingFiles),
        res = gulp
            .src(allFiles, {
                base: config.global.src,
                outDir: config.global.tmp})
            .pipe(tslint({ formatter: 'verbose' }))
            .pipe(tslint.report())
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .on('error', () => {
                if (watchMode) {
                    return;
                }
                process.exit(1);
            });
    return res.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.global.tmp));
}