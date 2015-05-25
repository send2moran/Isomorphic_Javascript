var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var webpack = require('gulp-webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function() {
  return gulp.src('src/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('webpack-dev-server', require('./gulpTasks/webpack-dev-server'));

gulp.task('default', ['webpack']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['default']);
});
