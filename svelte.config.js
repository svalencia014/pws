// svelte.config.js
import adapter from 'svelte-adapter-github';
const dev = process.env.NODE_ENV === 'development';
export default {
  kit: {
    adapter: adapter({
      // default options are shown. On some platforms
      // these options are set automatically — see below
      pages: 'docs',
			paths: {
				base: dev ? '' : '/PWS',
			},
			appDir: 'internal',
      assets: 'docs',
      fallback: null,
      precompress: false,
      domain: '',
      jekyll: false
    })
  }
};