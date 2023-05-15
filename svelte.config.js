import adapter from '@sveltejs/adapter-auto'
import sveltePreprocess from 'svelte-preprocess'
import { importAssets } from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [sveltePreprocess(), importAssets()],
  kit: {
    adapter: adapter()
  }
}
