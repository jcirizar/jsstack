'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    mqpacker = require('css-mqpacker'),
    csswring = require('csswring'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    runSequence = require('run-sequence');

gulp.task('sass', function() {
  var processors = [
    autoprefixer({
      browsers: ['last 4 versions']
    }),
    mqpacker,
    csswring
  ];

  return gulp.src('./_/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(processors))
      .pipe(gulp.dest('./public/css'))
      .pipe(livereload());
});

gulp.task('nodemon', function() {
  return nodemon({
    nodeArgs: ['--debug']
  });
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./_/scss/**/*.scss', ['sass'])
});


gulp.task('default', function(done) {
  runSequence(['nodemon', 'watch'], done);
});