var gulp = require('gulp');
var postCSS = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');

gulp.task('styles', function () {
  console.log('CSS files has been changed...');
  return gulp.src('./app/assets/styles/styles.css')
    // .pipe(postCSS([autoprefixer]))
    .pipe(postCSS([cssimport, cssvars, nested]))
    .on('error', function (errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});