const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DEV_PORT = require('./.env').DEV_PORT;

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },{
        test: /\.css?/,
        loader: 'style-loader!css-loader!'
      }, {
        test: /\.json?/,
        loader: "json-loader"
      },{
        test: /\.scss?/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options:
            {
              includePaths: ['node_modules', 'node_modules/grommet/node_modules']
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${APP_DIR}/index.html`,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: DEV_PORT,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      React: path.resolve(__dirname, './node_modules/react')
    }
  }
};

module.exports = config
