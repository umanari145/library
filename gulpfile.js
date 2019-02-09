var gulp = require('gulp');
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var config = require('./resources/config.js');

gulp.task('webpack',function(){
    //envを読み込める
    console.log(process.env.DBNAME)

    return webpackStream(config.webpack, webpack)
        .pipe(gulp.dest(config.js.dest));

});
