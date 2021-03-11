const path = require('path');
module.exports = {
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.resolve('static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
