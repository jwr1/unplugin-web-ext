const { resolve } = require('path');
const { WebExtPlugin } = require('../dist/webpack');
const options = require('./options');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'hello.js'),
  output: {
    path: resolve(__dirname, 'dist/webpack'),
    filename: 'main.js',
  },
  plugins: [WebExtPlugin(options)],
};
