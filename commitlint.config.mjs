export default {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore'],
		],
		'scope-enum': [
			2,
			'always',
			[
				'web',
				'admin',
				'ui',
				'',
			],
		],
		'subject-case': [2, 'never', ['pascal-case', 'upper-case']],
	},
};
