import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig} from 'vite';
//import {enhancedImages} from '@sveltejs/enhanced-img';
import path from 'path';

export default defineConfig({
 resolve: {
  alias: {
   $stores: path.resolve('./src/lib/stores/'),
   $components: path.resolve('./src/lib/components/'),
   $features: path.resolve('./src/lib/features/'),
   $data: path.resolve('./src/lib/data/')
  }
 },
 plugins: [
  //enhancedImages(),
  sveltekit()
 ]
});
