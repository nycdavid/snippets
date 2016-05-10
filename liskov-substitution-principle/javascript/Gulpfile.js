'use strict';

var gulp = require('gulp')
  , globby = require('globby')
  , source = require('vinyl-source-stream')
  , browserify = require('browserify')
  , through = require('through2');

gulp.task('browserify', function() {
  var bundledStream = through();

  bundledStream
  .pipe(source('app.js'))
  .pipe(gulp.dest('./public/javascripts'));

  globby(['./src/javascripts/**/*.*'])
  .then(function(entries) {
    var bsfy = browserify({
      entries: entries,
      debug: true
    }).transform('babelify', { presets: ['es2015', 'react'] })
      .transform({
        global: true
      }, 'uglifyify');

    bsfy
      .bundle()
      .on('error', function(error) {
        console.log(error.toString());
        this.emit('end');
      })
      .pipe(bundledStream);
    }).catch(function(err) {
      bundledStream.emit('error', err);
    });

  return bundledStream;
});

gulp.task('build', ['browserify']);

gulp.task('watch', ['build'], function() {
  gulp.watch('./src/javascripts/**/*.*', ['browserify']);
});
