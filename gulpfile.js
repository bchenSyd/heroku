const path = require('path');
const fs = require('fs');
const gulp = require('gulp');
const less = require('gulp-less');
const concat= require('gulp-concat');


gulp.task('compile:less', () => {
    return gulp.src(['styles/**/*.less'])
        .pipe(less())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('styles/'))
})

gulp.task('default', ['compile:less'], () => {
    gulp.watch('styles/**/*.less', ['compile:less']);
});