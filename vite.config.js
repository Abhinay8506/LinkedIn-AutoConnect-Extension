import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        contentScript: resolve(__dirname, 'src/contentScript.js'),
      },
      output: {
        // No module splitting for content script
        manualChunks: undefined,
      },
    },
  },
});
