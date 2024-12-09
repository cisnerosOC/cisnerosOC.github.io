import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import sitemap from "@astrojs/sitemap"
export default defineConfig({
  site: "https://centric.io",
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://yourdomain.com",
  integrations: [sitemap()],
})
