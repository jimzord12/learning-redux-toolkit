import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = import('path');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~bootstrap': (await path).resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
});
