'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/scripts/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/scripts/build'
  },
  watch: false,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};
