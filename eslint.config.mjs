import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import turboPlugin from 'eslint-plugin-turbo';
import globals from 'globals';
import tseslint, {
	configs as tseslintConfigs,
	parser as tseslintParser,
} from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: ['**/dist/**'],
	},
	{
		files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
		extends: [
			eslint.configs.recommended,
			tseslintConfigs.recommendedTypeChecked,
			tseslintConfigs.stylisticTypeChecked,
			importPlugin.flatConfigs.recommended,
			importPlugin.flatConfigs.typescript,
			reactPlugin.configs.flat.recommended,
			jsxA11yPlugin.flatConfigs.recommended,
			reactPlugin.configs.flat['jsx-runtime'],
			reactHooksPlugin.configs['recommended-latest'],
			prettierPluginRecommended,
		],
		plugins: {
			turbo: turboPlugin,
		},
		languageOptions: {
			parser: tseslintParser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
				project: ['./tsconfig.json'],
			},
			globals: {
				...globals.browser,
			},
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts', '.css'],
				},
				node: {
					extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts', '.css'],
				},
			},
		},
		rules: {
			// General
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'error',
			'consistent-return': 'error',
			curly: ['error', 'all'],
			eqeqeq: ['error', 'always'],
			'no-else-return': 'error',
			'no-empty': ['error', { allowEmptyCatch: true }],
			'no-var': 'error',
			'prefer-const': 'error',
			'no-duplicate-imports': 'error',

			// TypeScript
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{ argsIgnorePattern: '^_' },
			],
			'@typescript-eslint/no-inferrable-types': 'off',
			'@typescript-eslint/consistent-type-imports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-floating-promises': 'error',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-misused-promises': 'error',
			'@typescript-eslint/prefer-nullish-coalescing': 'warn',
			'@typescript-eslint/prefer-optional-chain': 'warn',

			// Import
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						'internal',
						['parent', 'sibling', 'index'],
						'object',
						'type',
					],
					pathGroups: [
						{
							pattern: '{react,react-router-dom}',
							group: 'external',
							position: 'before',
						},
					],
					pathGroupsExcludedImportTypes: [],
					'newlines-between': 'always',
					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],
			'import/no-unresolved': 'error',
			'import/no-duplicates': 'error',
			'import/no-named-as-default': 'error',

			// React
			'react/react-in-jsx-scope': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'error',
			'react/button-has-type': [
				'error',
				{ button: true, submit: true, reset: true },
			],
			'react/function-component-definition': 'error',
			'react/no-danger': 'warn',
			'react/jsx-no-constructed-context-values': 'warn',

			// React Hooks
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'error',

			// JSX A11y
			'jsx-a11y/alt-text': 'error',
			'jsx-a11y/aria-role': 'error',
			'jsx-a11y/aria-props': 'error',
			'jsx-a11y/aria-unsupported-elements': 'error',
			'jsx-a11y/role-has-required-aria-props': 'error',
			'jsx-a11y/anchor-is-valid': 'error',
			'jsx-a11y/label-has-associated-control': 'error',
			'jsx-a11y/no-static-element-interactions': 'error',
			'jsx-a11y/no-noninteractive-tabindex': 'error',

			// Prettier
			'prettier/prettier': ['error', {}, { usePrettierrc: true }],

			// Turbo
			'turbo/no-undeclared-env-vars': 'error',
		},
	},
	// JavaScript 파일 설정
	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		extends: [tseslintConfigs.disableTypeChecked],
	},
);
