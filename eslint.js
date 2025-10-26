import { eslintLayoutsRules } from './eslint-layouts.js';
import { eslintProblemsRules } from './eslint-problems.js';
import { eslintSuggestionsRules } from './eslint-suggestions.js';

export const eslintRules = [
	{
		rules: {
			...eslintLayoutsRules.rules,
			...eslintProblemsRules.rules,
			...eslintSuggestionsRules.rules,
		},
	},
];
