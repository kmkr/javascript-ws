module.exports = function(config) {
  config.set({
    basePath: './src',
    files: [
      '**/*.js'
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS', 'Firefox']
  });
};
