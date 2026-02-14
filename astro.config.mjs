// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import db from "@astrojs/db";
import netlify from '@astrojs/netlify';


import mdx from "@astrojs/mdx";


import vue from "@astrojs/vue";


// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: 'dracula-soft'
    }
  },
  site: "https://joefarah.com",
  integrations: [preact(), db(), mdx(), vue()],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
});