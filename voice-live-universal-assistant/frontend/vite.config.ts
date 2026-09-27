import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const backendUrl = process.env.VITE_BACKEND_URL || 'https://aegisai-hucpdtcvfxd2dnbs.westus3-01.azurewebsites.net';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    __BACKEND_URL__: JSON.stringify(backendUrl),
  },
  optimizeDeps: {
    include: ['@fluentui/react-toast'],
  },
  server: {
    proxy: {
      '/ws': {
        target: backendUrl,
        ws: true,
        changeOrigin: true,
        secure: false,
      },
      '/health': {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
      },
      '/config': {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
      },
      '/languages': {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
