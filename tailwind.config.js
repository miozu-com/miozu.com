import miozu from './src/lib/data/miozu.js';

export default {
 darkMode: ['selector'],
 content: ['./src/**/*.{html,js,svelte}'],
 theme: {
  extend: {
   fontFamily: {
    serif: ['IBM Plex Serif'],
    sans: ['Inter']
   },
   colors: {
    ...miozu
   }
  }
 },
 plugins: []
};
