import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        // framer-motion is the bulk of the bundle and changes far less often
        // than our own code. Splitting it keeps repeat visits to a cache hit.
        manualChunks: {
          motion: ["framer-motion"],
        },
      },
    },
  },
});
