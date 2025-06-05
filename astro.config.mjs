// @ts-check
import { defineConfig } from "astro/config";
import adapterNode from '@astrojs/node';
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
  server: {
    host: "0.0.0.0",
    port: 4321,
  },
  output: "server",
  adapter: adapterNode({
    mode: 'standalone'
  }), 
});
