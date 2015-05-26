var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var webpack = require('gulp-webpack');
//var istanbul = require('gulp-istanbul');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('webpack-dev-server', require('./gulpTasks/webpack-dev-server'));



// We'll use mocha here, but any test framework will work
// var mocha = require('gulp-mocha');
//
// gulp.task('test', function (cb) {
//   gulp.src(['lib/**/*.js', 'main.js'])
//     .pipe(istanbul()) // Covering files
//     .pipe(istanbul.hookRequire()) // Force `require` to return covered files
//     .on('finish', function () {
//       gulp.src(['test/*.js'])
//         .pipe(mocha())
//         .pipe(istanbul.writeReports()) // Creating the reports after tests runned
//         .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } })) // Enforce a coverage of at least 90%
//         .on('end', cb);
//     });
// });


gulp.task('default', ['webpack']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['default']);
});
