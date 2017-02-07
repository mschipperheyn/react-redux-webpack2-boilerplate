const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config.base');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const GLOBALS = {
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  },
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
};

module.exports = merge(config,{
    // debug: false,
    // cache: true,
  devtool: 'cheap-module-source-map',
  entry: {
    application: 'production',
    // js: './src/index.js',
    vendor: [
      'babel-polyfill',
      'es6-promise',
      'immutable',
      'isomorphic-fetch',
      'react-dom',
      'react-redux',
      'react-router',
      'react',
      'redux-thunk',
      'redux',
    ],
  },
  module: {
    noParse: /\.min\.js$/,
    rules: [
        {
          test: /\.scss$/,
          include:[
              path.resolve(__dirname, '../src/scss'),
              path.resolve(__dirname, '../src/js'),
              path.resolve(__dirname, '../src/assets'),
          ],
          loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: [
                  'css-loader',
                  'postcss-loader',
                  'sass-loader'
              ]
           })
       },
       {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: [
                  'css',
                  'postcss'
              ]
            })
        }
    ],
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin(GLOBALS),
      new DashboardPlugin()
  ]
});
