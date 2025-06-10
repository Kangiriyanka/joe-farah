// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://joefarah.netlify.app/",
  integrations: [preact(), db()],
  vite: {
    plugins: [tailwindcss()],
  },
});