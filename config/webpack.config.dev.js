const base = require('./webpack.config.base');
const merge = require('webpack-merge');
const paths = require('./webpack.paths');

const config = merge(base, {
  devtool: 'eval-source-map',
  entry: {
    application: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './index.js'
    ]
  },
  devServer: {
    hot: true,
    contentBase: paths.context,
    publicPath: '/'
  }
});

module.exports = config;
