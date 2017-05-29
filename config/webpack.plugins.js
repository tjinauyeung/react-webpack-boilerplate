const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const plugins = [
  // enable HMR globally
  new webpack.HotModuleReplacementPlugin(),
  // readable module names in console
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: 'index.html'
  }),
  // split shared code into vendor bundle
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'js/vendor.bundle.js',
    minChunks: Infinity
  })
];

module.exports = plugins;
