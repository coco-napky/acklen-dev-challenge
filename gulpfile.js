"use strict"

const gulp = require('gulp');
const exec = require('gulp-exec');


gulp.task('tests', () => {
  var options = {
    continueOnError: true // default = false, true means don't emit error event
  };
  var reportOptions = {
  	err: true, // default = true, false means don't write err
  	stderr: true, // default = true, false means don't write stderr
  	stdout: true // default = true, false means don't write stdout
  }
  gulp.src('./tests/*.js')
    .pipe(exec('node <%= file.path %>', options))
    .pipe(exec.reporter(reportOptions));
    run();
});


const run = () => {
	var options = {
	    continueOnError: false // default = false, true means don't emit error event
	 };
	 var reportOptions = {
	  	err: true, // default = true, false means don't write err
	  	stderr: true, // default = true, false means don't write stderr
	  	stdout: true // default = true, false means don't write stdout
	 }

	 gulp.src('./app.js')
	    .pipe(exec('node <%= file.path %>', options))
	    .pipe(exec.reporter(reportOptions));
}

gulp.task('watch',() => {

   // Watch lib and tests
  gulp.watch(['./lib/*.js', './tests/*.js'], ['tests']);

  // Watch app.js
  gulp.watch('./app.js').on('change', run);
});


gulp.task('default', ['tests', 'watch']);
