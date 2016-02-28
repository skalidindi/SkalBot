// Copyright 2016, Santosh Kalidindi, All rights reserved.
'use strict';
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const PATHS = {
  src: './src',
  dist: './dist',
  mainAppEntry: './src/index',
};
const appName = 'skalbot';

const nodeModules = {};
fs.readdirSync('./node_modules')
  .filter((x) => ['.bin'].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

const config = {
  entry: PATHS.mainAppEntry,
  target: 'node',
  output: {
    path: path.join(__dirname, PATHS.dist),
    filename: `${appName}.js`,
  },
  cache: true,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=es2015'],
      exclude: /node_modules/,
    }],
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false,
    }),
  ],
  resolve: {
    extensions: ['', '.js'],
  },
  devtool: 'sourcemap',
};

module.exports = config;
