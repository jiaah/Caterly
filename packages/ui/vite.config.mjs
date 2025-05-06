import tailwindcssVite from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import baseConfig from '../../vite.config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
