var gulp = require('gulp');
var concat = require('gulp-concat');

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

gulp.task('default', function() {
	return gulp.src(APP_FILES)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', ['default'], function() {
	return gulp.watch(APP_FILES, ['default']);
});
