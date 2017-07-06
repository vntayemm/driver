var gulp = require('gulp'),
    del = require('del'),
    path = require('path'),
    config = require('./config');

var util = require('gulp-util'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint'),
    sourcemaps = require('gulp-sourcemaps');

var typingFiles = [config.global.src + config.global.format.typing],
    tsUnitFiles = [].concat(config.global.app + config.global.format.spec, config.global.helper + config.global.format.ts),
    tsFiles = [].concat(config.global.format.ts, tsUnitFiles);

gulp.task('test',() => {
    console.log(config.global.src + config.global.format.typing);
    typingFiles.forEach(function(f) {
        console.log(f.path);
    }, this);
});
 
gulp.task('ts', ['clean-ts'], () => {
    return compileTs(tsFiles);
});
/**
gulp.task('ts', ['clean-ts'], () => {
    return compileTs(tsFiles);
});

gulp.watch('ts-app', () => {
    return compileTs(config.project.ts);
});

gulp.task('ts-unit', () => {
    return compileTs(tsUnitFiles);
});

gulp.task('tslint', () => {
    return lintTs(tsFiles);
});

gulp.task('tslint-app', () => {
    return lintTs(config.project.fileFormat.ts);
});

gulp.task('tslint-unit', () => {
    return lintTs(tsUnitFiles);
});
 */

function lintTs(files) {
    return gulp
        .src(tslint({ formatter: 'verbose' }))
        .pipe(tslint.report());
}

gulp.task('clean-ts', () => {
    del([config.global.tmpApp]);
});

function compileTs(files, watchMode) {
    watchMode = watchMode || false;

    files.forEach(function(f) {
        console.log(f.path);
    }, this);

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
/**
gulp.watch('wacth-ts', () => {
    return gulp.watch(tsFiles, (file) => {
        util.log('compiling' + file.path + '---');
        return compileTs(file.path, true);
    })
});


 */