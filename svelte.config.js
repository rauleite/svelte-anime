// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare-workers';
import preprocess from 'svelte-preprocess';

import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace'
import { pwaConfiguration, replaceOptions } from './pwa-configuration.js'
/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    prerender: {
      default: true
    },
    vite: {
      plugins: [
        VitePWA(pwaConfiguration),
        replace(replaceOptions)
      ],
      resolve: {
        alias: {
          // $lib: path.resolve("./src/lib"),
          // $types: path.resolve("./src/types"),
          // $src: (path.resolve("./src"))
        },
      },
    },
  },
};

export default config;
