'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config.js');

module.exports = function(target) {

    var serverConfig;
    var webpackServer;

    // http://localhost:8080/webpack-dev-server/
    //webpack-dev-server --content-base dist/

    serverConfig = {
        publicPath: 'http://localhost:3000/' + webpackConfig.output.publicPath,
        contentBase: 'dist',
        inline: true,
        quiet: false,
        noInfo: true,
        hot: true,
        stats: {
            colors: true
        }
    };
    webpackServer = new WebpackDevServer(webpack(webpackConfig), serverConfig);
    return webpackServer;
};
