const path = require('path');
const merge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./config.base');
const rootPath = path.resolve(__dirname, './../');
const clientPath = path.resolve(__dirname, './../client');

const publicPath = process.env.PATH_STATIC + '/';

module.exports = merge(baseConfig, {
  entry: {
    app: path.resolve(clientPath, './src/index.tsx')
  },
  output: {
    path: path.resolve(rootPath, './dist/client'),
    publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  devServer: {
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'development',
  plugins: [
    new htmlWebpackPlugin({
      title: 'Demo Challenge',
      hash: true,
      template: path.resolve(clientPath, './public/index.html')
    })
  ]
});
