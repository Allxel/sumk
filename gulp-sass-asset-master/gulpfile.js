const gulp = require('gulp');

const gulpSass = require('gulp-sass');

const buildSass = function(cb){
	console.log('buildSass');
	gulp.src('./src/styles/index.scss')
	    .pipe(gulpSass())
		.pipe(gulp.dest('build/'));
	cb();
}
exports.default = buildSass;