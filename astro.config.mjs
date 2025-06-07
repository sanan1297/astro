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
    port: 80,
    allowedHosts: ['proyectocompnube2025-clb-1675984537.us-east-1.elb.amazonaws.com', 'loadtest-353334504.us-east-1.elb.amazonaws.com']
  },
  output: "server",
  adapter: adapterNode({
    mode: 'standalone'
  }), 
});
