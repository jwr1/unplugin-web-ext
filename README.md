# unplugin-web-ext

[![NPM version](https://img.shields.io/npm/v/unplugin-web-ext?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-web-ext)

Simplify web extension creation with Webpack, Rollup, Vite, and esbuild.

## Install

```bash
npm i unplugin-web-ext
```

<details>
<summary>Webpack</summary><br>

```js
// webpack.config.js
const { WebExtPlugin } = require('unplugin-web-ext/webpack');

module.exports = {
  /* ... */
  plugins: [
    WebExtPlugin({
      /* options */
    }),
  ],
};
```

<br></details>

<details>
<summary>Rollup</summary><br>

```js
// rollup.config.js
import { WebExtPlugin } from 'unplugin-web-ext/rollup';

export default {
  plugins: [
    WebExtPlugin({
      /* options */
    }),
  ],
};
```

<br></details>

<details>
<summary>Vite</summary><br>

```js
// vite.config.ts
import { WebExtPlugin } from 'unplugin-web-ext/vite';

export default defineConfig({
  plugins: [
    WebExtPlugin({
      /* options */
    }),
  ],
});
```

<br></details>

<details>
<summary>esbuild</summary><br>

```js
// esbuild.config.js
import { build } from 'esbuild';
import { WebExtPlugin } from 'unplugin-icons/esbuild';

build({
  /* ... */
  plugins: [
    WebExtPlugin({
      /* options */
    }),
  ],
});
```

<br></details>

## Usage

```js
WebExtPlugin({
  manifest: ['baseManifest.json', { name: 'my extension' }, 'genManifest.js'],
  indent: 2,
  pkgJsonProps: ['version', 'name: short_name'],
});
```

See [type definitions](src/types.ts) for more details.
