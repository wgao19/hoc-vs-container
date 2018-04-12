const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        options: {
          babelrc: false,
          extends: path.resolve(__dirname, '.babelrc.json'),
        },
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ]
      }
    ],
  },
  devServer: {
    contentBase: __dirname,
    compress: true,
    port: 1234,
  },
};
