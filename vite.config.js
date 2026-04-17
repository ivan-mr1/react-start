import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { imageOptimizerPlugin } from './vite-plugins/image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageOptimizerPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/shared/assets', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/app/styles', import.meta.url)),
      '@helpers': fileURLToPath(new URL('./src/app/styles/helpers', import.meta.url)),
    },
  },
});
