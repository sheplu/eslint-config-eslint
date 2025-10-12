/* eslint-disable id-length, no-magic-numbers */
export default [
	{
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
			'accessor-pairs': [
				'error',
				{
					enforceForClassMembers: true,
					enforceForTSTypes: true,
					getWithoutSet: true,
					setWithoutGet: true,
				},
			],
			'arrow-body-style': [
				'error',
				'as-needed',
				{
					requireReturnForObjectLiteral: true,
				},
			],
			'block-scoped-var': [ 'error' ],
			'camelcase': [
				'error',
				{
					allow: [],
					ignoreDestructuring: false,
					ignoreGlobals: false,
					ignoreImports: false,
					properties: 'always',
				},
			],
			'capitalized-comments': [
				'error',
				'always',
				{
					ignoreConsecutiveComments: false,
					ignoreInlineComments: false,
					ignorePattern: 'slint',
				},
			],
			'class-methods-use-this': [
				'error',
				{
					enforceForClassFields: true,
					exceptMethods: [],
					ignoreClassesWithImplements: 'public-fields',
					ignoreOverrideMethods: false,
				},
			],
			'complexity': [
				'error',
				{
					max: 15,
					variant: 'modified',
				},
			],
			'consistent-return': [
				'error',
				{
					treatUndefinedAsUnspecified: true,
				},
			],
			'consistent-this': [ 'error', 'that' ],
			'curly': [ 'error', 'all' ],
			'default-case': [
				'error',
				{
					commentPattern: '',
				},
			],
			'default-case-last': [ 'error' ],
			'default-param-last': [ 'error' ],
			'dot-notation': [
				'error',
				{
					allowKeywords: false,
					allowPattern: '',
				},
			],
			'eqeqeq': [ 'error', 'always' ],
			'func-name-matching': [ 'error', 'never' ],
			'func-names': [
				'error',
				'always',
				{
					generators: 'always',
				},
			],
			'func-style': [
				'error',
				'declaration',
				{
					allowArrowFunctions: false,
					allowTypeAnnotation: true,
					overrides: {
						namedExports: 'declaration',
					},
				},
			],
			'grouped-accessor-pairs': [
				'error',
				'getBeforeSet',
				{
					enforceForTSTypes: true,
				},
			],
			'guard-for-in': [ 'error' ],
			'id-denylist': [
				'error',
				'data',
				'err',
				'e',
				'cb',
				'callback',
			],
			'id-length': [
				'error',
				{
					exceptionPatterns: [],
					exceptions: [ 'js' ],
					max: 25,
					min: 3,
					properties: 'always',
				},
			],
			'id-match': [ 'off' ],
			'init-declarations': [ 'error', 'always' ],
			'logical-assignment-operators': [
				'error',
				'always',
				{
					enforceForIfStatements: true,
				},
			],
			'max-classes-per-file': [
				'error',
				{
					ignoreExpressions: false,
					max: 2,
				},
			],
			'max-depth': [
				'error',
				{
					max: 3,
				},
			],
			'max-lines': [
				'error',
				{
					max: 800,
					skipBlankLines: true,
					skipComments: true,
				},
			],
			'max-lines-per-function': [
				'error',
				{
					IIFEs: true,
					max: 40,
					skipBlankLines: true,
					skipComments: true,
				},
			],
			'max-nested-callbacks': [
				'error',
				{
					max: 3,
				},
			],
			'max-params': [
				'error',
				{
					countVoidThis: true,
					max: 4,
				},
			],
			'max-statements': [
				'error',
				15,
				{
					ignoreTopLevelFunctions: false,
				},
			],
			'new-cap': [
				'error',
				{
					capIsNew: true,
					capIsNewExceptionPattern: '',
					capIsNewExceptions: [],
					newIsCap: true,
					newIsCapExceptionPattern: '',
					newIsCapExceptions: [],
					properties: true,
				},
			],
			'no-alert': [ 'error' ],
			'no-array-constructor': [ 'error' ],
			'no-bitwise': [
				'error',
				{
					allow: [],
					int32Hint: true,
				},
			],
			'no-caller': [ 'error' ],
			'no-case-declarations': [ 'error' ],
			'no-console': [ 'error' ],
			'no-continue': [ 'error' ],
			'no-delete-var': [ 'error' ],
			'no-div-regex': [ 'error' ],
			'no-else-return': [
				'error',
				{
					allowElseIf: true,
				},
			],
			'no-empty': [
				'error',
				{
					allowEmptyCatch: false,
				},
			],
			'no-empty-function': [
				'error',
				{
					allow: [],
				},
			],
			'no-empty-static-block': [ 'error' ],
			'no-eq-null': [ 'error' ],
			'no-eval': [
				'error',
				{
					allowIndirect: false,
				},
			],
			'no-extend-native': [
				'error',
				{
					exceptions: [],
				},
			],
			'no-extra-bind': [ 'error' ],
			'no-extra-boolean-cast': [
				'error',
				{
					enforceForInnerExpressions: true,
				},
			],
			'no-extra-label': [ 'error' ],
			'no-global-assign': [
				'error',
				{
					exceptions: [],
				},
			],
			'no-implicit-coercion': [
				'error',
				{
					'allow': [],
					'boolean': true,
					'disallowTemplateShorthand': true,
					'number': true,
					'string': true,
				},
			],
			'no-implicit-globals': [
				'error',
				{
					lexicalBindings: true,
				},
			],
			'no-implied-eval': [ 'error' ],
			'no-inline-comments': [
				'error',
				{
					ignorePattern: 'slint',
				},
			],
			'no-invalid-this': [
				'error',
				{
					capIsConstructor: true,
				},
			],
			'no-iterator': [ 'error' ],
			'no-label-var': [ 'error' ],
			'no-labels': [ 'error' ],
			'no-lone-blocks': [ 'error' ],
			'no-lonely-if': [ 'error' ],
			'no-loop-func': [ 'error' ],
			'no-magic-numbers': [
				'error',
				{
					detectObjects: true,
					enforceConst: true,
					ignore: [],
					ignoreArrayIndexes: false,
					ignoreClassFieldInitialValues: false,
					ignoreDefaultValues: false,
					ignoreEnums: false,
					ignoreNumericLiteralTypes: false,
					ignoreReadonlyClassProperties: false,
					ignoreTypeIndexes: false,
				},
			],
			'no-multi-assign': [
				'error',
				{
					ignoreNonDeclaration: false,
				},
			],
			'no-multi-str': [ 'error' ],
			'no-negated-condition': [ 'error' ],
			'no-nested-ternary': [ 'error' ],
			'no-new': [ 'error' ],
			'no-new-func': [ 'error' ],
			'no-new-wrappers': [ 'error' ],
			'no-nonoctal-decimal-escape': [ 'error' ],
			'no-object-constructor': [ 'error' ],
			'no-octal': [ 'error' ],
			'no-octal-escape': [ 'error' ],
			'no-param-reassign': [
				'error',
				{
					ignorePropertyModificationsFor: [],
					ignorePropertyModificationsForRegex: [],
					props: true,
				},
			],
			'no-plusplus': [
				'error',
				{
					allowForLoopAfterthoughts: false,
				},
			],
			'no-proto': [ 'error' ],
			'no-redeclare': [
				'error',
				{
					builtinGlobals: true,
				},
			],
			'no-regex-spaces': [ 'error' ],
			'no-restricted-exports': [
				'error',
				{
					restrictDefaultExports: {
						defaultFrom: true,
						direct: true,
						named: true,
						namedFrom: true,
						namespaceFrom: true,
					},
					restrictedNamedExports: [],
					restrictedNamedExportsPattern: '',
				},
			],
			'no-restricted-globals': [
				'error',
				{
					checkGlobalObject: true,
					globalObjects: [],
					globals: [],
				},
			],
			'no-restricted-imports': [ 'error' ],
			'no-restricted-properties': [ 'error' ],
			'no-restricted-syntax': [ 'error' ],
			'no-return-assign': [ 'error', 'always' ],
			'no-script-url': [ 'error' ],
			'no-sequences': [
				'error',
				{
					allowInParentheses: false,
				},
			],
			'no-shadow': [
				'error',
				{
					allow: [],
					builtinGlobals: true,
					hoist: 'all',
					ignoreFunctionTypeParameterNameValueShadow: false,
					ignoreOnInitialization: false,
					ignoreTypeValueShadow: false,
				},
			],
			'no-shadow-restricted-names': [
				'error',
				{
					reportGlobalThis: true,
				},
			],
			'no-ternary': [ 'error' ],
			'no-throw-literal': [ 'error' ],
			'no-undef-init': [ 'error' ],
			'no-undefined': [ 'error' ],
			'no-underscore-dangle': [
				'error',
				{
					allow: [],
					allowAfterSuper: false,
					allowAfterThis: false,
					allowAfterThisConstructor: false,
					allowFunctionParams: false,
					allowInArrayDestructuring: false,
					allowInObjectDestructuring: false,
					enforceInClassFields: true,
					enforceInMethodNames: true,
				},
			],
			'no-unneeded-ternary': [
				'error',
				{
					defaultAssignment: false,
				},
			],
			'no-unused-expressions': [
				'error',
				{
					allowShortCircuit: false,
					allowTaggedTemplates: false,
					allowTernary: false,
					enforceForJSX: true,
					ignoreDirectives: false,
				},
			],
			'no-unused-labels': [ 'error' ],
			'no-useless-call': [ 'error' ],
			'no-useless-catch': [ 'error' ],
			'no-useless-computed-key': [
				'error',
				{
					enforceForClassMembers: true,
				},
			],
			'no-useless-concat': [ 'error' ],
			'no-useless-constructor': [ 'error' ],
			'no-useless-escape': [ 'error' ],
			'no-useless-rename': [
				'error',
				{
					ignoreDestructuring: false,
					ignoreExport: false,
					ignoreImport: false,
				},
			],
			'no-useless-return': [ 'error' ],
			'no-var': [ 'error' ],
			'no-void': [
				'error',
				{
					allowAsStatement: false,
				},
			],
			'no-warning-comments': [
				'error',
				{
					decoration: [ '@' ],
					location: 'start',
					terms: [ 'todo', 'fixme' ],
				},
			],
			'no-with': [ 'error' ],
			'object-shorthand': [ 'error', 'consistent-as-needed' ],
			'one-var': [
				'error',
				{
					'awaitUsing': 'never',
					'const': 'never',
					'let': 'never',
					'separateRequires': true,
					'using': 'never',
					'var': 'never',
				},
			],
			'operator-assignment': [ 'error', 'never' ],
			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: false,
					allowUnboundThis: false,
				},
			],
			'prefer-const': [
				'error',
				{
					destructuring: 'any',
					ignoreReadBeforeAssign: true,
				},
			],
			'prefer-destructuring': [
				'error',
				{
					AssignmentExpression: {
						array: true,
						object: true,
					},
					VariableDeclarator: {
						array: true,
						object: true,
					},
				},
				{
					enforceForRenamedProperties: true,
				},
			],
			'prefer-exponentiation-operator': [ 'error' ],
			'prefer-named-capture-group': [ 'error' ],
			'prefer-numeric-literals': [ 'error' ],
			'prefer-object-has-own': [ 'error' ],
			'prefer-object-spread': [ 'error' ],
			'prefer-promise-reject-errors': [
				'error',
				{
					allowEmptyReject: false,
				},
			],
			'prefer-regex-literals': [
				'error',
				{
					disallowRedundantWrapping: true,
				},
			],
			'prefer-rest-params': [ 'error' ],
			'prefer-spread': [ 'error' ],
			'prefer-template': [ 'error' ],
			'preserve-caught-error': [
				'error',
				{
					requireCatchParameter: true,
				},
			],
			'radix': [ 'error', 'always' ],
			'require-await': [ 'error' ],
			'require-unicode-regexp': [
				'error',
				{
					requireFlag: 'v',
				},
			],
			'require-yield': [ 'error' ],
			'sort-imports': [
				'error',
				{
					allowSeparatedGroups: false,
					ignoreCase: false,
					ignoreDeclarationSort: false,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: [
						'none',
						'all',
						'multiple',
						'single',
					],
				},
			],
			'sort-keys': [
				'error',
				'asc',
				{
					allowLineSeparatedGroups: false,
					caseSensitive: true,
					ignoreComputedKeys: false,
					minKeys: 2,
					natural: true,
				},
			],
			'sort-vars': [
				'error',
				{
					ignoreCase: false,
				},
			],
			'strict': [ 'error', 'safe' ],
			'symbol-description': [ 'error' ],
			'vars-on-top': [ 'error' ],
			'yoda': [
				'error',
				'never',
				{
					exceptRange: false,
					onlyEquality: false,
				},
			],
			'unicode-bom': [ 'error', 'never' ],
		},
	},
];
