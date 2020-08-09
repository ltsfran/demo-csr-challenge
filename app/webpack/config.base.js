const path = require('path');
const webpack = require('webpack');
const { dotenvOverride, createVarsDefinePlugin } = require('./utils');
const rootPath = path.resolve(__dirname, './../');

dotenvOverride();

const publicPath = process.env.PATH_STATIC + '/';

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@app': rootPath
    }
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|svg|woff2|woff|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              publicPath
            }
          }
        ]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(createVarsDefinePlugin())
  ]
};
