import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',  // Reference PostCSS config file
  },
});
