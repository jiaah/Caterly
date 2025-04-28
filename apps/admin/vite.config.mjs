import tailwindcssVite from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import baseConfig from '../../configs/vite.config.mjs';

export default defineConfig(
  mergeConfig(baseConfig, {
    root: '.',
    plugins: [
      react(),
      tailwindcssVite(),
      tsconfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    resolve: {
      alias: {
        '@': './src',
      },
    },
    server: {
      port: 5173,
    },
    build: {
      outDir: 'dist',
      sourcemap: true,
    },
    publicDir: 'public',
  })
);
