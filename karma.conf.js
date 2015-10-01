module.exports = function(config) {
  config.set({
    basePath: './',
    files: [
      'src/**/*_test.js',
    ],
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    //browsers: ['PhantomJS', 'Firefox'],

    preprocessors: {
      'src/**/*_test.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
          }
        ]
      }
    },

    webpackMiddleware: {
        noInfo: true
    },
  });
};
