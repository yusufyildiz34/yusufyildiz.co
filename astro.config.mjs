// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yusufyildiz.co',
  trailingSlash: 'ignore',
  build: {
    // Inline the small stylesheet so the first paint needs no extra request.
    inlineStylesheets: 'always',
  },
});
