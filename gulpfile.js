var gulp = require('gulp');
var watch = require('gulp-watch');
var postCSS = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssimport = require('postcss-import');

gulp.task('default', function () {
  console.log("Gulp is here...");
});

gulp.task('html', function () {
  console.log('HTML files has been changed...');
});

gulp.task('styles', function () {
  console.log('CSS files has been changed...');
  return gulp.src('./app/assets/styles/styles.css')
    // .pipe(postCSS([autoprefixer]))
    .pipe(postCSS([cssimport, cssvars, nested]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
  watch('./app/*.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/**/*css', function () {
    gulp.start('styles');
  })
});