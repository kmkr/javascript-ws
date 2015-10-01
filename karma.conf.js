module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
      'src/**/*.js',
      'src/**/*_test.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS', 'Firefox'],

    preprocessors: {
      'src/**/*.js': ['babel']
    },
    babelPreprocessor: {
      options: {
          sourceMap: 'inline'
      },
      filename: function (file) {
          return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
          return file.originalPath;
      }
    }
  });
};
