import adapter from '@sveltejs/adapter-cloudflare';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

export default {
 compilerOptions: {
  runes: true
 },
 extensions: ['.svelte', '.md'],
 kit: {
  adapter: adapter({
   routes: {
    include: ['/*'],
    exclude: ['<all>']
   },
   platformProxy: {
    configPath: 'wrangler.toml',
    environment: undefined,
    experimentalJsonConfig: false,
    persist: false
   }
  })
 },
 preprocess: [vitePreprocess()]
};
