import tailwindcssVite from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';
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
      dts({
        outputDir: 'dist',
        insertTypesEntry: true,
        include: ['./src'],
      }),
    ],
    resolve: {
      alias: {
        '@': './src',
      },
    },
    build: {
      // 라이브러리 설정
      lib: {
        entry: './src/index.ts',
        name: 'ui',
        formats: ['es'], // 트리쉐이킹 친화적
        fileName: 'index',
      },
      outDir: 'dist',
      cssCodeSplit: true,
      // 라이브러리 -> 번들 크기 줄이고 소비자 앱에 위임 (필수 설정!)
      rollupOptions: {
        external: ['react', 'react-dom', 'react/jsx-runtime'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
          assetFileNames: 'styles/[name][extname]',
        },
      },
      sourcemap: true,
    },
  })
);
