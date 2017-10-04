// Not getting anywhere without these libs, 
// pretty much the point of a task runner tbh
var path = require('path');
var fs = require('fs');

// Gulp libraries & utils
var gulp = require('gulp');
//var react = require('gulp-babel');
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

//var htmltojsx = require('htmltojsx');
var html2jsx = require('gulp-html2jsx');

// Misc utils
var merge = require('merge-stream');

var print = require('gulp-print');
var recursiveFolder = require('gulp-recursive-folder');

// Packagers
//var babelify   = require('babelify');
//var browserify = require('browserify');
//var webpack = require('webpack');

var es = require('event-stream');

var THEME_DIR = 'src'
var LAYOUTS_DIR = THEME_DIR + '/layouts'
var HTML_DIR = LAYOUTS_DIR + '/html'
var JSX_DIR = LAYOUTS_DIR + '/jsx'

var files = [
    LAYOUTS_DIR + '/html/qc-1p-001/**/*.html',
    LAYOUTS_DIR + '/html/qc-1p-001/*.html',
    LAYOUTS_DIR + '/html/qc-shop-001/**/*.html',
    LAYOUTS_DIR + '/html/qc-shop-001/*.html',
    LAYOUTS_DIR +  '/html/qc-shop-002/**/*.html',
    LAYOUTS_DIR + '/html/qc-shop-002/*.html',
    LAYOUTS_DIR + '/html/qc-shop-003/**/*.html',
    LAYOUTS_DIR + '/html/qc-shop-003/*.html'
]

var options = {
    readFolder: HTML_DIR,
    target: JSX_DIR
}

var currentFile = null
 
gulp.task('generateJsx', recursiveFolder({
        base: HTML_DIR,
        exclude: [    // exclude the debug modules from thus build 
            'debug-modules'
        ]
    }, function(folderFound) {
        //This will loop over all folders inside pathToFolder main and recursively on the children folders, secondary 
        //With folderFound.name gets the folderName 
        //With folderFound.path gets all folder path found 
        //With folderFound.pathTarget gets the relative path beginning from options.pathFolder 
        //console.log(JSON.stringify(folderFound));
        console.log('dest: ' + options.target + '/' + folderFound.pathTarget);
        
        return gulp.src(folderFound.path + '/*.html')
            .pipe(rename(function(path) {
                console.log(JSON.stringify(path));
                currentFile = path.basename;
                path.extname = '.jsx';
            }))
            .pipe(html2jsx({
              createClass: true,
              outputClassName: currentFile
            }))
            .pipe(gulp.dest(options.target + '/' + folderFound.pathTarget));
}));

gulp.task('default', function() {
	gulp.watch([
		THEME_DIR + '/js/**/*.jsx', // Watch for JSX/ES6 source changes in JS dir
		THEME_DIR + '/js/**/*.js', // Watch for JS/ES5 source changes in JS dir
		THEME_DIR + '/less/*.less', // Watch for changes in LESS dir
		THEME_DIR + '/scss/*.scss' // Watch for changes in SCSS dir
		], ['compile-styles']);
});

gulp.task('compile-styles', function(cb) {
	runSequence(
		'compile-less',
		'compile-sass',
		cb);
});

gulp.task('compile-less', function() {
	return gulp.src(APP_DIR + '/less/**/*.less')
	.pipe(plumber())
    //.pipe(flatten())
    .pipe(less({paths: BUILD_DIR + '/css/'}))
    .pipe(concat('lessed.css'))
    
    .pipe(gulp.dest(BUILD_DIR + '/css/'));
});

gulp.task('compile-sass', function() {
	//return gulp.src(APP_DIR + '/scss/fbwd-theme.scss')
	return gulp.src(APP_DIR + '/scss/**/*.scss')
	.pipe(plumber())
    //.pipe(flatten())
    .pipe(sass())
    .pipe(concat('sassed.css'))
    
    .pipe(gulp.dest(BUILD_DIR + '/css/'));
});