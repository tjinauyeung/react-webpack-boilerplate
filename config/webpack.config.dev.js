const base = require('./webpack.config.base');
const merge = require('webpack-merge');

const config = merge(base, {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    application: [
      'webpack/hot/only-dev-server',
      './index.js'
    ]
  },
  devServer: {
    hot: true,
    publicPath: '/'
  }
});

module.exports = config;
