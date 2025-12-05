import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/EVA-Sovereign-UI/lab/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../packages/eva-sovereign-ui-wc/src'),
    },
  },
  build: {
    outDir: '../../dist/lab',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['lit'],
          'router': ['@vaadin/router'],
        },
      },
    },
  },
  server: {
    port: 5174,
    open: true,
  },
});
