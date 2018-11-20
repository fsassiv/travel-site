const path = require('path');
var nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './app/assets/scripts/app.js',
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app/temp/scripts')
  },
  devtool: 'eval-source-map',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals({
    whitelist: ['jquery']
  })], // in order to ignore all modules in node_modules folder
  module: {
    rules: [{
      test: /\.m?js$/,
      exclude: /[node_modules]/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};