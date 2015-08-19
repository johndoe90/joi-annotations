var gulp = require('gulp');
var shell = require('gulp-shell');
var typescript = require('gulp-typescript');
var typescriptVersion = require('typescript');

var TS_FILES = ['lib/**/*.ts'];
var JS_FILES = ['lib/**/*.js'];

gulp.task('clear-console', function() {
	return gulp
		.src('')
		.pipe(shell([
			'clear'
		]));
});

gulp.task('typescript', ['clear-console'], function() {
	return gulp
		.src(TS_FILES)
		.pipe(typescript({
			target: 'ES5',
			module: 'commonjs',
			typescript: typescriptVersion,
			experimentalDecorators: true
		}))
		.pipe(gulp.dest('lib'));
});

gulp.task('watch-nocompile', function() {
	gulp.watch(JS_FILES, ['test']);
});

gulp.task('watch', function() {
	gulp.watch(TS_FILES, ['typescript']);
	gulp.watch(JS_FILES, ['test']);
});

gulp.task('test', function() {
	return gulp
		.src('')
		.pipe(shell([
			'node node_modules/jasmine/bin/jasmine.js JASMINE_CONFIG_PATH=jasmine.json'
		]));
});

gulp.task('default', ['typescript', 'watch']);
gulp.task('nocompile', ['typescript', 'watch-nocompile']);
