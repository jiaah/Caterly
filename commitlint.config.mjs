export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'docs', 'refactor', 'test', 'chore'],
		],
		'scope-enum': [
			2,
			'always',
			[
				'admin',
				'assets',
				'design',
				'tailwind',
				'utils',
				'web',
				'', // empty scope for global changes
			],
		],
		'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
	},
};
