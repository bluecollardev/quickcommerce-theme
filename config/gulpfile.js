// Not getting anywhere without these libs, 
// pretty much the point of a task runner tbh
var path = require('path');
var fs = require('fs');

// Gulp libraries & utils
var gulp = require('gulp');
var react = require('gulp-babel'); // For Grunt processing of JSX
var less = require('gulp-less');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var runSequence = require('gulp-run-sequence');
var jsValidate = require('gulp-jsvalidate');
var clean = require('gulp-clean');
var shell = require('gulp-shell');
var replace = require('gulp-replace');
var rename = require('gulp-rename');

// Misc utils
var merge = require('merge-stream');

// Packagers
//var babelify   = require('babelify'); // Don't need it, transpile using webpack
//var browserify = require('browserify'); // Don't need it, transpile/require using webpack
var webpack = require('webpack');

// Config files
var config = require('./build.config.js');
var webpackConfig = require('./webpack.config.js');

// Project vars
var PHONEGAP_DIR = './' + config.phonegapDirectory; // Ignore, PhoneGap only
var PHONEGAP_DEV_PORT = config.phonegapServePort; // Ignore, PhoneGap only

var APP_DIR = './' + config.sourceDirectory + '/app';
var BUILD_DIR = './' + config.buildDirectory;
var LIB_DIR = './' + config.libDirectory;
var THEME_SOURCE_DIR = './' + config.themeSourceDirectory;
var THEME_BUILD_DIR = './' + config.themeBuildDirectory;

/**
 * Watch project directories for changes
 */
gulp.task('default', function() {
	gulp.watch([
		APP_DIR + '/js/**/*.jsx', // Watch for JSX/ES6 source changes in JS dir
		APP_DIR + '/js/**/*.js', // Watch for JS/ES5 source changes in JS dir
		APP_DIR + '/less/*.less', // Watch for changes in LESS dir
		APP_DIR + '/less/**/*.less', // Watch for changes in LESS dir
		APP_DIR + '/scss/*.scss', // Watch for changes in SCSS dir
		APP_DIR + '/scss/**/*.scss' // Watch for changes in SCSS dir
		], ['build']);
});

gulp.task('build', function(cb) {
	runSequence(
		'clean-build',
		'build-app',
		'build-styles',
		'concat-css',
		'copy-index',
		cb);
});

gulp.task('build-app', function(cb) {
	runSequence(
		'webpackify',
		'bundle-react',
		cb);
});

gulp.task('build-styles', function(cb) {
	runSequence(
		'compile-less', 
        'compile-sass',
		cb);
});

gulp.task('clean-build', function() {
	return gulp.src(BUILD_DIR, {read: false})
	.pipe(clean());
});

gulp.task('webpackify', function(cb) { 
	webpack(webpackConfig, function(err, stats) {
		if(err) throw new gutil.PluginError('webpack', err);
		console.log('[webpack]', stats.toString({
            // output options
          }));
		cb();
	});
});

gulp.task('bundle-scripts', function(cb) {
	runSequence(
		'bundle-react',
		'bundle-js',
		cb);
});

gulp.task('bundle-react', function() {
    return gulp.src([
            LIB_DIR + '/react/react.min.js',
            LIB_DIR + '/react-dom/react-dom.min.js'
		])
	.pipe(concat('react-bundle.js'))
	.pipe(gulp.dest(BUILD_DIR + '/js/'));
});

// Not really using bower for this project
gulp.task('bundle-js', function() {
	var sources = config.jsIncludes;
    return gulp.src([
			// Specify any files to inject manually if you want to
		].concat(sources))
	.pipe(concat('bower-bundle.js'))
	.pipe(gulp.dest(BUILD_DIR + '/js/'));
});

gulp.task('compile-less', function() {
	console.log(APP_DIR);
	return gulp.src(APP_DIR + '/less/*.less')
	.pipe(plumber())
    //.pipe(flatten())
    .pipe(less({paths: BUILD_DIR + '/css/'}))
    .pipe(concat('lessed.css'))
    
    .pipe(gulp.dest(BUILD_DIR + '/css/'));
});

gulp.task('compile-sass', function() {
	console.log(APP_DIR);
	return gulp.src(APP_DIR + '/scss/*.scss')
	.pipe(plumber())
    //.pipe(flatten())
    .pipe(sass())
    .pipe(concat('sassed.css'))
    
    .pipe(gulp.dest(BUILD_DIR + '/css/'));
});

gulp.task('concat-css', function() {
    var sources = config.cssIncludes;
    return gulp.src([
            BUILD_DIR + '/css/sassed.css',
            BUILD_DIR + '/css/lessed.css'
		].concat(sources))
	.pipe(plumber())
	.pipe(concat('bundle.css'))
	//.pipe(gulp.dest(PHONEGAP_DIR + '/www/css/')); // TODO: Fx to copy to PhoneGap dirs
	.pipe(gulp.dest(BUILD_DIR + '/css/')); // TODO: Fx to copy to PhoneGap dirs
});

gulp.task('copy-index', function() {
	return gulp.src(APP_DIR + '/index.html')
	.pipe(gulp.dest(BUILD_DIR + '/'));
});

/* PhoneGap Only Below Here*/
gulp.task('copy-phonegap-index', function() {
	return gulp.src(APP_DIR + '/index.html')
	.pipe(gulp.dest(PHONEGAP_DIR + '/www/'));
});

/* Not ready! */
gulp.task('phonegap-create', function(cb){
	runSequence('clean-app', 'create-app', 'install-plugins', cb);
});

gulp.task('clean-phonegap', function() {
	return gulp.src(PHONEGAP_DIR, {read: false})
	.pipe(clean());
});

gulp.task('create-phonegap-app', shell.task([
	'phonegap create ' + PHONEGAP_DIR
	]));

/*gulp.task('install-phonegap-plugins', shell.task(getPhonegapPluginCommands(), {
	cwd: PHONEGAP_DIR
}));*/

gulp.task('phonegap-serve', shell.task([
	'phonegap serve --port=' + PHONEGAP_DEV_PORT
], {
	cwd: PHONEGAP_DIR
}));