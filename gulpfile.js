var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');
var uglify = require('gulp-minify');

gulp.task('sass', function() {
	return gulp.src('./assets/scss/style.scss')
		.pipe(sass())
		.pipe(nano())
		.pipe(gulp.dest('./dist/assets/css'))
});

gulp.task('uglify', function() {
	gulp.src('./assets/js/index.js')
		.pipe(uglify({
			ext:{
				min: '.js',
			},
			noSource: true,
		}))
		.pipe(gulp.dest('./dist/assets/js'))
});

gulp.task('watch', function() {
	gulp.watch('./assets/scss/**/**.scss', ['sass']);
	gulp.watch('./assets/js/**/**.js', ['uglify']);
});
