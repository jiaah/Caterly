import tailwindcssVite from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, mergeConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import baseConfig from '../../configs/vite.config.mjs';

export default defineConfig(({ mode }) => {
	const isLib = mode === 'lib';

	const commonConfig = {
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
	};

	const libConfig = {
		...commonConfig,
		build: {
			lib: {
				entry: './src/index.ts',
				name: '@caterly/ui',
				formats: ['es'],
				fileName: 'index',
			},
			outDir: 'dist',
			cssCodeSplit: true,
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
		plugins: [
			...commonConfig.plugins,
			dts({
				outputDir: 'dist',
				insertTypesEntry: true,
				include: ['./src'],
			}),
		],
	};

	const devConfig = {
		...commonConfig,
		server: {
			port: 5173,
		},
		build: {
			outDir: 'dist',
			rollupOptions: {
				input: './src/index.tsx',
			},
			sourcemap: true,
		},
		publicDir: 'public',
	};

	return mergeConfig(baseConfig, isLib ? libConfig : devConfig);
});
