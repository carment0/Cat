const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/components/entry.jsx'),
  output: {
    path: path.join(__dirname),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  },
  devtool: 'source-maps'
};
