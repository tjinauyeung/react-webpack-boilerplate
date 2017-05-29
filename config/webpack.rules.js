const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      'babel-loader'
    ],
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    use: 'url-loader?limit=20480&name=assets/images/[name]-[hash].[ext]'
  },
  {
    test: /\.(woff|woff2|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    use: 'url-loader?limit=20480&name=assets/fonts/[name].[ext]?[hash]'
  }
];

module.exports = rules;
