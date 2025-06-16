// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import db from "@astrojs/db";
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula-soft'
    }
  },
  site: "https://joefarah.netlify.app/",
  integrations: [preact(), db()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});