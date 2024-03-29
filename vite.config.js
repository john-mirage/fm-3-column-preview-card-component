import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@images': resolve(__dirname, 'src/images'),
      '@components': resolve(__dirname, 'src/components'),
      '@interfaces': resolve(__dirname, 'src/interfaces'),
    },
  },
});
