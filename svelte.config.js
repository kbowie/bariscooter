import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use the Netlify adapter for deployment.
		// See https://kit.svelte.dev/docs/adapter-netlify for configuration options.
		adapter: adapter()
	}
};

export default config;
