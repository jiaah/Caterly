import tailwindcssVite from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import baseConfig from '../../vite.config.mjs';

export default defineConfig(
	mergeConfig(baseConfig, {
		root: '.',
		plugins: [
			react(),
			tailwindcssVite(),
			tsconfigPaths({
				projects: ['./tsconfig.json'],
			}),
			dts({ outDir: 'dist' }),
		],
		resolve: {
			alias: {
				'@': './src',
			},
		},
		build: {
			lib: {
				entry: './src/index.ts',
				name: '@caterly/ui',
				fileName: 'index',
				formats: ['es'],
			},
			outDir: 'dist',
			rollupOptions: {
				external: ['react', 'react-dom', 'react/jsx-runtime'],
			},
		},
	}),
);
