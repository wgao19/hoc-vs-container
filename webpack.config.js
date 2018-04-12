const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
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
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 1234,
  },
};
