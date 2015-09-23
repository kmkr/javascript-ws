var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var watch = require('gulp-watch');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var KarmaServer = require('karma').Server;

gulp.task('test', ['lint'], function (done) {
  return new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    autoWatch: true
  }, function () {
    done();
  }).start();
});

gulp.task('watch', function () {
  gulp.watch('./src/**/*.js', ['lint']);
});

gulp.task('lint', function () {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('webpack', ['lint'], function(callback) {
    webpack(require('./webpack.config.js'), function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
        }));
        callback();
    });
});

gulp.task('webpack-dev-server', function(callback) {
    var myConfig = Object.create(require('./webpack.config.js'));

    new WebpackDevServer(webpack(myConfig), {
    }).listen(8080, 'localhost', function(err) {
        if(err) throw new gutil.PluginError('webpack-dev-server', err);
        gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});

gulp.task('default', ['test']);
gulp.task('package', ['webpack']);
