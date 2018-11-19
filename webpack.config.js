const path = require('path');

module.exports = {
  entry: './app/assets/scripts/app.js',
  mode: 'development',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app/temp/scripts')
  },
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