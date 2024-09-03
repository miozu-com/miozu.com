import adapter from '@sveltejs/adapter-cloudflare';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {preprocessMeltUI, sequence} from '@melt-ui/pp';

const config = {
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
 preprocess: sequence([
  vitePreprocess(),
  preprocessMeltUI() // leave at the end!
 ])
};

export default config;
