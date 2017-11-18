var gulp = require('gulp');
var useref = require('gulp-useref');

gulp.task('hello', function() {
  console.log('Hello World!');
});

var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(gulpIf('*.css', minifyCSS()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(useref())
    .pipe(gulp.dest('dist'))
});
