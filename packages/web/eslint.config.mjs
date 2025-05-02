import path from 'path';
import { fileURLToPath } from 'url';
import baseConfig from '../../eslint.config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
	...baseConfig,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parserOptions: {
				project: path.join(__dirname, 'tsconfig.json'),
				tsconfigRootDir: __dirname,
			},
		},
	},
];
