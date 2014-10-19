var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var CLASSES = [
	'Bookmarklet',
	'BookmarkletCollection',
	'BookmarkletItemView',
	'BookmarkletDetailView',
	'BookmarkletCollectionView',
	'Router',
	'main'
];

var APP_FILES = CLASSES.map(function(classname) {
	return 'js/' + classname + '.js';
});
var SASS_FILES = './scss/*.scss';

gulp.task('default', ['js', 'sass']);

gulp.task('js', function() {
	return gulp.src(APP_FILES)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
	return gulp.src(SASS_FILES)
		.pipe(sass())
		.pipe(gulp.dest('./'));
});

gulp.task('watch', ['default'], function() {
	gulp.watch(APP_FILES, ['js']);
	gulp.watch(SASS_FILES, ['sass']);
});
