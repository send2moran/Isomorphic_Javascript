'use strict';

require('babel/register');

var debug = require('debug')('dev');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('../webpack.config.js');

var compiler = webpack(config);
var devServer = new WebpackDevServer(compiler, {
  publicPath: '/dist/',
  hot: true,
  historyApiFallback: true
});

devServer.listen(80, 'localhost', function () {
  debug(`\`webpack-dev-server\` listen on port 80`);
});
