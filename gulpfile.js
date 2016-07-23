var gulp = require('gulp'),
  concat = require('gulp-concat');

  var libjs = [
    'node_modules/jquery/dist/core.js',
    './node_modules/bootstrap/dist/css/bootstrap',
  ];
  
  gulp.task('libjs',function(){
	  gulp.src(libjs)
	  .pipe(concat('lib.js'))
	  .pipe(gulp.dest('./build/js'));
  });
  