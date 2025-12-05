import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  base: '/EVA-Sovereign-UI/',
  root: __dirname,
  server: {
    port: 5174,
    open: '/apps/showcase-demo/index.html',
  },
  preview: {
    port: 5174,
    open: '/apps/showcase-demo/index.html',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../../packages/eva-sovereign-ui-wc/src', import.meta.url)),
      'packages': fileURLToPath(new URL('../../packages', import.meta.url)),
    },
  },
  build: {
    outDir: '../../dist-showcase',
    emptyOutDir: true,
  },
});
