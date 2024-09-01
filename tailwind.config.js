import miozu from '$lib/data/miozu';

export default {
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
