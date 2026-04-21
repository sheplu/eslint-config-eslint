# @sheplu/eslint-config-eslint

[![npm version](https://img.shields.io/npm/v/@sheplu/eslint-config-eslint.svg)](https://www.npmjs.com/package/@sheplu/eslint-config-eslint)
[![quality gates](https://img.shields.io/github/actions/workflow/status/sheplu/eslint-config-eslint/quality-gates.yaml?branch=main&label=quality%20gates)](https://github.com/sheplu/eslint-config-eslint/actions/workflows/quality-gates.yaml?query=branch%3Amain)
[![license](https://img.shields.io/npm/l/@sheplu/eslint-config-eslint.svg)](./LICENSE)

Opinionated, exhaustive configuration for every core ESLint rule — ready to drop into an ESLint 10+ flat config.

This package only ships rules from [`eslint/eslint`](https://eslint.org/docs/latest/rules/) itself (no plugins). Every non-deprecated upstream rule is configured explicitly, so nothing is left to defaults and nothing silently changes when ESLint ships a new core rule — a scheduled CI job diffs the package against `eslint.org/docs/latest/rules/` every week and opens an issue on drift.

## Installation

```sh
npm install --save-dev @sheplu/eslint-config-eslint eslint
```

Requires `eslint >= 10` (flat config) and Node `>= 24`.

## Usage

In your `eslint.config.js`:

```js
import { defineConfig } from 'eslint/config';
import { eslintRules } from '@sheplu/eslint-config-eslint';

export default defineConfig([
    {
        files: [ '**/*.{js,mjs,cjs}' ],
        extends: [ eslintRules ],
    },
]);
```

`eslintRules` is an array of flat-config objects, so it plugs directly into `extends` or can be spread into your own config.

## What's inside

All rules are organized after ESLint's own documentation categories:

| Source                   | Category                                                                            |
| ------------------------ | ----------------------------------------------------------------------------------- |
| `eslint-problems.js`     | [Possible problems](https://eslint.org/docs/latest/rules/#possible-problems)        |
| `eslint-suggestions.js`  | [Suggestions](https://eslint.org/docs/latest/rules/#suggestions)                    |
| `eslint-layouts.js`      | [Layout & formatting](https://eslint.org/docs/latest/rules/#layout--formatting)     |

Layout rules are deliberately minimal — formatting is better delegated to a dedicated stylistic plugin (see [`@sheplu/eslint-config`](https://www.npmjs.com/package/@sheplu/eslint-config) if you want a matching stylistic layer).

Every rule is set to `error` with options spelled out explicitly. If you need a more permissive baseline, override rules individually in your own config.

## Scripts

```sh
npm test                 # run the test suite (includes upstream drift check)
npm run test:coverage    # run tests with coverage
npm run lint             # lint the package itself
npm run lint:fix         # lint with autofix
```

## Upstream drift

`review-rules.js` fetches [`eslint.org/docs/latest/rules/`](https://eslint.org/docs/latest/rules/), parses the rule index, and diffs it against the configured rule set. This runs:

- as part of `npm test`,
- on a weekly schedule (`.github/workflows/eslint-rules-drift.yaml`), which opens a GitHub issue if new rules appear, are renamed, or are removed upstream.
