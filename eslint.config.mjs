import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTurbo from 'eslint-plugin-turbo';
import globals from 'globals';

export default [
	js.configs.recommended,
	{
		ignores: ['**/*.config.{js,ts}'],
	},

	// JavaScript 파일 설정
	{
		files: ['**/*.{js,jsx,mjs,cjs}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
	},

	// TypeScript 파일 설정
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaFeatures: { jsx: true },
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
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
		},
	},

	// 공통 설정 (JS/TS)
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.es2021,
			},
		},
		plugins: {
			turbo: pluginTurbo,
			import: pluginImport,
			prettier: pluginPrettier,
			react: pluginReact,
			'react-hooks': pluginReactHooks,
			'jsx-a11y': pluginJsxA11y,
		},
		settings: {
			react: {
				version: 'detect',
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

			// Import
			'import/order': [
				'error',
				{
					groups: [
						['builtin', 'external'],
						['internal'],
						['parent', 'sibling', 'index'],
						['object'],
						['type'],
					],
					pathGroups: [
						{ pattern: 'react', group: 'builtin', position: 'before' },
						{ pattern: 'react-*', group: 'builtin', position: 'before' },
						{ pattern: '@caterly/*', group: 'external', position: 'before' },
						{
							pattern: './styles/**/*.css',
							group: 'external',
							position: 'after',
						},
						{ pattern: '@/**', group: 'internal', position: 'before' },
					],
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
	// 빌드 산출물 무시
	{
		ignores: ['*-dist/**'],
	},
	// 항상 마지막에 위치
	{
		...eslintConfigPrettier,
	},
];
