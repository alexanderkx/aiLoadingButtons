var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    nib = require('nib');


gulp.task('stylus', function() {
    gulp.src('./app/styl/*.styl')
    	.pipe(stylus({use: nib(), compress: true}))
	    .on('error', console.log) 
	    .pipe(gulp.dest('./app/css/'))
	    .pipe(livereload());
});

gulp.task('concat', function(){
  gulp.task('styl');
	gulp.src('./app/css/*.css')
		.pipe(concat('aiLoadingButtons.min.css'))
    .pipe(gulp.dest('./dist/css/'))
		.pipe(livereload());
});

gulp.task('watch', function(){
      livereload.listen();
  		gulp.watch('./app/styl/*.styl',['stylus']);
   		gulp.watch(['./dist/css/*.css'],['concat']);
});

gulp.task('default',['watch','stylus','concat']);