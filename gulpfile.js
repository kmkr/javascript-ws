var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');
var watch = require('gulp-watch');
var KarmaServer = require('karma').Server;

gulp.task('test', ['lint'], function (done) {
    new KarmaServer({
      configFile: __dirname + '/karma.conf.js',
      autoWatch: true
    }, function () {
      done();
    }).start();
});

gulp.task('lint', function () {
    return gulp.src('./src/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('default', ['test'], function () {
    return gulp.watch('./src/**/*.js', ['lint']);
});

gulp.task('package', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist'));
});
