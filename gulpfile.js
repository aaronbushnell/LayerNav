var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    rename = require("gulp-rename"),
    usemin = require('gulp-usemin'),
    minifyCSS = require('gulp-minify-css');

gulp.task('connect', function () {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('clean', function (cb) {
  del(
    ['dist'], cb
  );
});

gulp.task('copy', function () {
  return gulp.src(['./app/*.js', './app/*.css'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('usemin', function () {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      js: [uglify()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function () {
  return gulp.src('./app/layernav.css')
    .pipe(minifyCSS())
    .pipe(rename("layernav.min.css"))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', function () {
  return gulp.src('./app/layernav.js')
    .pipe(uglify())
    .pipe(rename("layernav.min.js"))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('serve', ['connect']);

gulp.task('build', ['copy', 'usemin', 'styles', 'scripts']);

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
