import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://bokepperkosa.pages.dev',
  output: 'server',
  adapter: cloudflare(),
});
