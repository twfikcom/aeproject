import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Critical for deploying to GitHub Pages or any subdirectory
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});