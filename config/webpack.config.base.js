const path = require('path');
const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const paths = require('./webpack.paths');

const config = {
  context: paths.context,
  entry: [
    './index.js'
  ],
  output: {
    path: paths.output,
    filename: 'app.bundle.js'
  },
  module: {
    rules
  },
  plugins: plugins,
  resolve: {
    modules: [
      paths.nodeModules
    ],
    extensions: ['.js', '.jsx', '.json']
  }
};

module.exports = config;
