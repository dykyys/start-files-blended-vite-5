import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: '/src/components',
      pages: '/src/pages',
      helpers: '/src/helpers',
      styles: '/src/styles',
      service: '/src/service',
      reduxState: '/src/reduxState',
    },
  },
});
