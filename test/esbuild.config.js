const { build } = require('esbuild');
const { WebExtPlugin } = require('../dist/esbuild');
const options = require('./options');

build({
  entryPoints: ['hello.js'],
  bundle: true,
  outdir: 'dist/esbuild',
  plugins: [WebExtPlugin(options)],
});
