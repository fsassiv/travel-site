require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');

var gulp = require('gulp');

gulp.task('default', function () {
  console.log('Gulp says Hi...');
});