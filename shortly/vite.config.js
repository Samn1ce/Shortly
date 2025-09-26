import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api/shorten": {
        target: "https://cleanuri.com",
        changeOrigin: true,
        // Rewrite /api/shorten → /api/v1/shorten
        rewrite: (path) => path.replace(/^\/api\/shorten/, "/api/v1/shorten"),
      },
    },
  },
});
