import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const backendUrl = process.env.VITE_BACKEND_URL || 'http://localhost:8000';

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
        target: 'http://localhost:8000',
        ws: true,
        changeOrigin: true,
      },
      '/health': 'http://localhost:8000',
      '/config': 'http://localhost:8000',
      '/languages': 'http://localhost:8000',
    },
  },
  build: {
    outDir: 'dist',
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
});
