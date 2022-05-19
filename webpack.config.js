const path = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: './.env' });

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
          test: /\.html$/,
          use: 'file?name=[name].[ext]',
        },
      ]
    },
    plugins: [new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })],
  };
