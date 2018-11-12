var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () {
  return console.log("Gulp is here...");
});

gulp.task('watch', function () {
  watch('./app/*.html', function () {
    gulp.start('default');
  });
});