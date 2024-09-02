import adapter from '@sveltejs/adapter-cloudflare';
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
 extensions: ['.svelte', '.md'],
 kit: {
  adapter: adapter()
 },
 preprocess: vitePreprocess()
};

export default config;
