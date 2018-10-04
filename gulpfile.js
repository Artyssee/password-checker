let gulp = require('gulp');
let sass = require('gulp-sass');
let nano = require('gulp-cssnano');
let concat = require('gulp-concat');
let uglify = require('gulp-minify');

gulp.task('sass', function() {
	return gulp.src('./assets/scss/style.scss')
		.pipe(sass())
		.pipe(nano())
		.pipe(gulp.dest('./dist/assets/css'))
});

gulp.task('uglify', function() {
	gulp.src('./assets/js/**/**.js')
		.pipe(concat('passwordchecker.js'))
		.pipe(uglify({
			ext:{
				min: '.js',
			},
			noSource: true,
		}))
		.pipe(gulp.dest('./dist/assets/js/form'))
});

gulp.task('watch', function() {
	gulp.watch('./assets/scss/**/**.scss', ['sass']);
	gulp.watch('./assets/js/**/**.js', ['uglify']);
});
