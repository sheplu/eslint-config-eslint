/* eslint-disable id-length */
export const eslintProblemsRules = {
	rules: {
		'array-callback-return': [
			'error',
			{
				allowImplicit: false,
				allowVoid: false,
				checkForEach: true,
			},
		],
		'constructor-super': [ 'error' ],
		'for-direction': [ 'error' ],
		'getter-return': [
			'error',
			{
				allowImplicit: false,
			},
		],
		'no-async-promise-executor': [ 'error' ],
		'no-await-in-loop': [ 'error' ],
		'no-class-assign': [ 'error' ],
		'no-compare-neg-zero': [ 'error' ],
		'no-cond-assign': [ 'error', 'always' ],
		'no-const-assign': [ 'error' ],
		'no-constant-binary-expression': [ 'error' ],
		'no-constant-condition': [ 'error' ],
		'no-constructor-return': [ 'error' ],
		'no-control-regex': [ 'error' ],
		'no-debugger': [ 'error' ],
		'no-dupe-args': [ 'error' ],
		'no-dupe-class-members': [ 'error' ],
		'no-dupe-else-if': [ 'error' ],
		'no-dupe-keys': [ 'error' ],
		'no-duplicate-case': [ 'error' ],
		'no-duplicate-imports': [ 'error' ],
		'no-empty-character-class': [ 'error' ],
		'no-empty-pattern': [
			'error',
			{
				allowObjectPatternsAsParameters: false,
			},
		],
		'no-ex-assign': [ 'error' ],
		'no-fallthrough': [
			'error',
			{
				allowEmptyCase: false,
				commentPattern: 'break[\\s]*omitted',
				reportUnusedFallthroughComment: true,
			},
		],
		'no-func-assign': [ 'error' ],
		'no-import-assign': [ 'error' ],
		'no-inner-declarations': [
			'error',
			'both',
			{
				blockScopedFunctions: 'disallow',
			},
		],
		'no-invalid-regexp': [
			'error',
			{
				allowConstructorFlags: [],
			},
		],
		'no-irregular-whitespace': [
			'error',
			{
				skipComments: false,
				skipJSXText: false,
				skipRegExps: false,
				skipStrings: false,
				skipTemplates: false,
			},
		],
		'no-loss-of-precision': [ 'error' ],
		'no-misleading-character-class': [
			'error',
			{
				allowEscape: true,
			},
		],
		'no-new-native-nonconstructor': [ 'error' ],
		'no-obj-calls': [ 'error' ],
		'no-promise-executor-return': [
			'error',
			{
				allowVoid: false,
			},
		],
		'no-prototype-builtins': [ 'error' ],
		'no-self-assign': [
			'error',
			{
				props: true,
			},
		],
		'no-self-compare': [ 'error' ],
		'no-setter-return': [ 'error' ],
		'no-sparse-arrays': [ 'error' ],
		'no-template-curly-in-string': [ 'error' ],
		'no-this-before-super': [ 'error' ],
		'no-unassigned-vars': [ 'error' ],
		'no-undef': [
			'error',
			{
				'typeof': true,
			},
		],
		'no-unexpected-multiline': [ 'error' ],
		'no-unmodified-loop-condition': [ 'error' ],
		'no-unreachable': [ 'error' ],
		'no-unreachable-loop': [
			'error',
			{
				ignore: [],
			},
		],
		'no-unsafe-finally': [ 'error' ],
		'no-unsafe-negation': [
			'error',
			{
				enforceForOrderingRelations: true,
			},
		],
		'no-unsafe-optional-chaining': [
			'error',
			{
				disallowArithmeticOperators: true,
			},
		],
		'no-unused-private-class-members': [ 'error' ],
		'no-unused-vars': [
			'error',
			{
				args: 'all',
				argsIgnorePattern: '',
				caughtErrors: 'all',
				caughtErrorsIgnorePattern: '',
				destructuredArrayIgnorePattern: '',
				ignoreClassWithStaticInitBlock: false,
				ignoreRestSiblings: false,
				ignoreUsingDeclarations: false,
				reportUsedIgnorePattern: false,
				vars: 'all',
				varsIgnorePattern: '',
			},
		],
		'no-use-before-define': [
			'error',
			{
				allowNamedExports: false,
				classes: true,
				enums: true,
				functions: true,
				ignoreTypeReferences: false,
				typedefs: true,
				variables: true,
			},
		],
		'no-useless-assignment': [ 'error' ],
		'no-useless-backreference': [ 'error' ],
		'require-atomic-updates': [
			'error',
			{
				allowProperties: true,
			},
		],
		'use-isnan': [
			'error',
			{
				enforceForIndexOf: true,
				enforceForSwitchCase: true,
			},
		],
		'valid-typeof': [
			'error',
			{
				requireStringLiterals: true,
			},
		],
	},
};
