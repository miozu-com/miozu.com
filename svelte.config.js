import adapter from '@sveltejs/adapter-cloudflare';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import {preprocessMeltUI, sequence} from '@melt-ui/pp';

const config = {
 extensions: ['.svelte', '.md'],
 kit: {
  adapter: adapter()
 },
 preprocess: sequence([
  vitePreprocess(),
  preprocessMeltUI() // leave at the end!
 ])
};

export default config;
