const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: [`${paths.src}/index.js`],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'Todos',
      template: `${paths.public}/index.html`,
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new webpack.ProgressPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.mjs']
  }
};
