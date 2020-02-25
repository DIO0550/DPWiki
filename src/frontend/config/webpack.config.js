const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: [
    './js/index.jsx'
  ],
  output: {
    path: `${__dirname}/../dist/`,
    filename: 'build.js'
  },
  devtool: 'source-map',
  devServer: {
    index: 'index.html',
    publicPath: '/',
    contentBase: `${__dirname}/../dist/`,
    historyApiFallback: true,
    watchContentBase: true,
    host: '0.0.0.0',
    port:3035
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }]
      }, 
      {
        test: /\.(scss|sass|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {  modules: true }
          },
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  performance: { hints: false},
}