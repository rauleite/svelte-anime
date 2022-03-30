// import { defineConfig } from 'vite'
// import { svelte } from '@sveltejs/vite-plugin-svelte'

// export default defineConfig({
//   plugins: [
//     svelte({ hot: !process.env.VITEST }),
//   ],
//   test: {
//     globals: true,
//     environment: 'jsdom',
//   },
// })
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    environment: `jsdom`,
    open: false,
    api: {
      host: '192.168.0.103'
    }
  },
}
