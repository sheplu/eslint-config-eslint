import { eslintLayoutsRules } from './src/eslint-layouts.js';
import { eslintProblemsRules } from './src/eslint-problems.js';
import { eslintSuggestionsRules } from './src/eslint-suggestions.js';

export const eslintRules = [
	{
		rules: {
			...eslintLayoutsRules.rules,
			...eslintProblemsRules.rules,
			...eslintSuggestionsRules.rules,
		},
	},
];
