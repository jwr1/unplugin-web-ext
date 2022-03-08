const { resolve } = require('path');
const { WebExtPlugin } = require('../dist/vite');
const options = require('./options');

module.exports = {
  root: __dirname,
  plugins: [WebExtPlugin(options)],
  build: {
    lib: {
      entry: resolve(__dirname, 'hello.js'),
      name: 'main',
      fileName: 'main.js',
    },
    outDir: 'dist/vite',
  },
};
