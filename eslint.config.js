import { defineConfig } from 'eslint/config';
import eslintRules from '@sheplu/eslint-config/src/eslint.js';
import globals from 'globals';
import js from '@eslint/js';
import markdown from '@eslint/markdown';
import markdownRules from '@sheplu/eslint-config/src/markdown.js';
import stylistic from '@stylistic/eslint-plugin';
import stylisticRules from '@sheplu/eslint-config/src/stylistic.js';

// eslint-disable-next-line no-restricted-exports
export default defineConfig([
	{
		'extends': [
			'js/recommended',
			eslintRules,
			stylisticRules,
		],
		'files': [ '**/*.{js,mjs,cjs}' ],
		'languageOptions': {
			globals: globals.node,
		},
		// eslint-disable-next-line object-shorthand
		'plugins': { '@stylistic': stylistic, js },
		'rules': {
		},
	},
	{
		'extends': [
			'markdown/recommended',
			markdownRules,
		],
		'files': [ '**/*.md' ],
		'language': 'markdown/gfm',
		'plugins': { markdown },
	},
]);
