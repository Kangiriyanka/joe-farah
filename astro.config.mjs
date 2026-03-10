// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import db from "@astrojs/db";
import netlify from '@astrojs/netlify';


import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";


// https://astro.build/config
export default defineConfig({

  

   i18n: {
    locales: ["en", "fr", "kr", "jp"],
    defaultLocale: "en",
  },

  markdown: {
    shikiConfig: {
      theme: 'dracula-soft'
    }
  },
  site: "https://joefarah.com",
  integrations: [preact(), db(), mdx(), vue(), svelte()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
    alias: {
      '@layouts': '/src/layouts',
      '@components': '/src/components',
    }
  }
    
  
  },
  adapter: netlify(),
});