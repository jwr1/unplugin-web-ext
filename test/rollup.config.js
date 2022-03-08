const { WebExtPlugin } = require('../dist/rollup');
const options = require('./options');

module.exports = {
  input: './hello.js',
  output: {
    dir: './dist/rollup',
  },
  plugins: [WebExtPlugin(options)],
};
