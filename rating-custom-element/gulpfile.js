/*
  1. npm install gulp -P
  2. no package.json, crie o script:
  3. "build": "ng build --prod --output-hashing=none && gulp"
  4. npm run build

  //Script adaptado de https://github.com/nitayneeman/made-with-love
*/

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('concat', function() {
    return gulp.src('./dist/rating-custom-element/*.js')
        .pipe(concat('rating.js'))
        .pipe(gulp.dest('./dist/element'));
});

gulp.task('rename', function() {
    return gulp.src('./dist/rating-custom-element/*.css')
        .pipe(rename('rating.css'))
        .pipe(gulp.dest('./dist/element'));
});

gulp.task('fonts', function() {
    return gulp.src(['./dist/rating-custom-element/fontawesome-webfont.*'])
        .pipe(gulp.dest('./dist/element'));
});

gulp.task('default', gulp.series('concat', 'rename', 'fonts'));
