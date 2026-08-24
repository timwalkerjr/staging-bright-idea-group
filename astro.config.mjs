// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const siteUrl = process.env.SITE_URL || 'https://brightideagroup.com';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  site: siteUrl,
  // CSRF origin check for form-encoded POST/PUT/PATCH/DELETE. This is the
  // Astro 5/6 default; pinned explicitly so a template edit can't silently
  // disable it. Note it does NOT cover /api/auth/* (JSON posts) — those are
  // protected by Better Auth trustedOrigins in the auth integration.
  security: {
    checkOrigin: true,
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
