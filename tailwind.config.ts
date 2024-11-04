import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: [
        './src/**/*.{html,js,svelte,ts}', 
        './node_modules/sverminal/**/*.{html,svelte,js,ts}'
    ],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, containerQueries, aspectRatio]
} satisfies Config;
