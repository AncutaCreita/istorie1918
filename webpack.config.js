const path = require('path'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin');
HtmlWebpackPlugin = require('html-webpack-plugin');
CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    open: true,
    hot: true,
    port: 1918,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /(bower_components)/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        })),
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new ExtractTextPlugin('assets/style.css'),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ]),
  ],
};