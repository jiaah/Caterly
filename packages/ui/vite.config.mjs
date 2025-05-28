/* eslint-disable no-undef */
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import baseConfig from '../../vite.config.mjs';

export default defineConfig(
	mergeConfig(baseConfig, {
		root: '.',
		plugins: [
			react(),
			tailwindcss(),
			tsconfigPaths({
				projects: ['./tsconfig.json'],
			}),
			dts({ outDir: 'dist' }),
		],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
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
