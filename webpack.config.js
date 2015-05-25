var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
        app: './src/main.js'
  },

  output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
      publicPath: '/scripts/'
  },

  devtool: 'eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
      extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
       { test: /\.js?$/, loaders: ['react-hot', 'babel-loader?optional=runtime'], exclude: /node_modules/ },
       { test: /traceur-runtime/, loader: 'imports?this=>window' }
    ]
  }
};
