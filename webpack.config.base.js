const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const buildPath = path.join(__dirname, './build');
const sourcePath = path.join(__dirname, './src');

module.exports = {
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'app-[hash].js',
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.(png|gif|jpg|jpeg|svg)$/,
          include: path.join(__dirname, './src/assets/img'),
          use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
        }
    ]
  },
  resolve: {
    extensions: [
        '.webpack-loader.js',
        '.web-loader.js',
        '.loader.js',
        '.js',
        '.jsx',
        '.json',
        '.scss'
    ],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src/js'),
    ],
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: 'vendor-[hash].js',
      }),
      new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(sourcePath, 'index.html'),
        path: buildPath,
        filename: 'index.html',
      }),
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [
            autoprefixer({
              browsers: [
                'last 3 version',
                'ie >= 10',
              ],
            }),
          ],
          context: sourcePath,
        },
      }),
  ]
};
