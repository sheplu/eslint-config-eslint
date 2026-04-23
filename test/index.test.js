import {
	afterEach,
	describe,
	it,
	mock,
} from 'node:test';
import {
	diffRules,
	fetchUpstreamRules,
	parseUpstreamRules,
} from './review-rules.js';
import assert from 'node:assert/strict';
import { eslintLayoutsRules } from '../src/eslint-layouts.js';
import { eslintProblemsRules } from '../src/eslint-problems.js';
import { eslintRules } from '../index.js';
import { eslintSuggestionsRules } from '../src/eslint-suggestions.js';

const validSeverities = new Set([
	'off',
	'warn',
	'error',
]);

function isValidSeverity(value) {
	if (Array.isArray(value)) {
		const [ severity ] = value;

		return Boolean(value.length) && validSeverities.has(severity);
	}

	return validSeverities.has(value);
};

describe('eslintRules export shape', () => {
	it('is a non-empty array with a single config object', () => {
		const expectedLength = 1;

		assert.ok(Array.isArray(eslintRules));
		assert.equal(eslintRules.length, expectedLength);
	});

	it('exposes a non-empty rules object', () => {
		const [ { rules } ] = eslintRules;

		assert.equal(typeof rules, 'object');
		assert.notEqual(rules, null);
		assert.ok(Object.keys(rules).length);
	});
});

describe('rule source files do not collide', () => {
	it('no rule name is defined in more than one source file', () => {
		const sources = {
			layouts: Object.keys(eslintLayoutsRules.rules),
			problems: Object.keys(eslintProblemsRules.rules),
			suggestions: Object.keys(eslintSuggestionsRules.rules),
		};

		const seen = new Map();
		const collisions = [];

		for (const [ source, names ] of Object.entries(sources)) {
			for (const name of names) {
				if (seen.has(name)) {
					collisions.push(`${name}: ${seen.get(name)} + ${source}`);
				} else {
					seen.set(name, source);
				}
			}
		}

		assert.deepEqual(collisions, []);
	});
});

describe('rule severities', () => {
	it('every rule uses a string severity (off/warn/error), not a numeric one', () => {
		const [ { rules } ] = eslintRules;
		const invalid = Object.entries(rules)
			.filter(([ , value ]) => !isValidSeverity(value))
			.map(([ name ]) => name);

		assert.deepEqual(invalid, []);
	});

	it('isValidSeverity accepts string forms and array forms starting with them', () => {
		assert.equal(isValidSeverity('off'), true);
		assert.equal(isValidSeverity('warn'), true);
		assert.equal(isValidSeverity('error'), true);
		assert.equal(isValidSeverity([ 'error' ]), true);
		assert.equal(isValidSeverity([ 'error', { option: true } ]), true);
	});

	it('isValidSeverity rejects numeric forms and unknown strings', () => {
		const off = 0;
		const warn = 1;
		const error = 2;
		const numericSeverities = [
			off,
			warn,
			error,
		];

		numericSeverities.forEach((severity) => {
			assert.equal(isValidSeverity(severity), false);
			assert.equal(isValidSeverity([ severity ]), false);
		});

		assert.equal(isValidSeverity('bogus'), false);
		assert.equal(isValidSeverity([]), false);
	});
});

describe('upstream rule parser', () => {
	it('extracts only anchor-tag rule names, skipping deprecated <p> entries', () => {
		const html = `
			<article><div class="rule__name_wrapper">
				<a href="/docs/latest/rules/foo" class="rule__name">foo-rule</a>
			</div></article>
			<article class="rule--deprecated">
				<p class="rule__name">old-deprecated-rule<span>deprecated</span></p>
			</article>
			<article><div class="rule__name_wrapper">
				<a href="/docs/latest/rules/bar" class="rule__name">bar-rule</a>
			</div></article>
		`;

		assert.deepEqual(parseUpstreamRules(html), [ 'foo-rule', 'bar-rule' ]);
	});

	it('returns an empty array for HTML with no rule names', () => {
		assert.deepEqual(parseUpstreamRules('<html><body>nothing here</body></html>'), []);
	});
});

describe('diffRules', () => {
	it('returns empty missing/extra for identical sets', () => {
		const { missing, extra } = diffRules([ 'a', 'b' ], [ 'a', 'b' ]);

		assert.deepEqual(missing, []);
		assert.deepEqual(extra, []);
	});

	it('detects a rule missing from the config (upstream added a new rule)', () => {
		const { missing, extra } = diffRules([ 'a' ], [ 'a', 'b-new' ]);

		assert.deepEqual(missing, [ 'b-new' ]);
		assert.deepEqual(extra, []);
	});

	it('detects an extra rule in the config (upstream removed a rule)', () => {
		const { missing, extra } = diffRules([ 'a', 'b-removed' ], [ 'a' ]);

		assert.deepEqual(missing, []);
		assert.deepEqual(extra, [ 'b-removed' ]);
	});

	it('detects a renamed rule as one missing + one extra', () => {
		const { missing, extra } = diffRules([ 'a', 'b-old' ], [ 'a', 'b-new' ]);

		assert.deepEqual(missing, [ 'b-new' ]);
		assert.deepEqual(extra, [ 'b-old' ]);
	});

	it('deduplicates names via Set semantics', () => {
		const uniqueCount = 2;
		const { configRules, upstreamRules } = diffRules([
			'a',
			'a',
			'b',
		], [
			'a',
			'b',
			'b',
		]);

		assert.equal(configRules.size, uniqueCount);
		assert.equal(upstreamRules.size, uniqueCount);
	});
});

const HTTP_OK = 200;
const HTTP_NOT_FOUND = 404;
const STEP_ONE = 1;
const ZERO = 0;
const COUNT_BELOW_MINIMUM = 10;
const COUNT_ABOVE_MINIMUM = 200;

function headersWithContentType(contentType) {
	return {
		get(name) {
			if (name.toLowerCase() === 'content-type') {
				return contentType;
			}

			return null;
		},
	};
}

function makeFetchResponse({
	body,
	contentType = 'text/html; charset=utf-8',
	isOk = true,
	status = HTTP_OK,
	statusText = 'OK',
}) {
	const headers = headersWithContentType(contentType);

	function text() {
		return Promise.resolve(body);
	}

	// Non-shorthand throughout so the short `ok` key (from the Response API shape) doesn't mix styles with the rest.
	/* eslint-disable id-length */
	return {
		headers: headers,
		ok: isOk,
		status: status,
		statusText: statusText,
		text: text,
	};
	/* eslint-enable id-length */
}

function buildRuleHtml(count) {
	const anchors = [];

	for (let index = ZERO; index < count; index = index + STEP_ONE) {
		anchors.push(`<a href="/docs/latest/rules/r${index}" class="rule__name">r${index}</a>`);
	}

	return anchors.join('\n');
}

function stubFetchWith(response) {
	mock.method(globalThis, 'fetch', () => Promise.resolve(response));
}

describe('fetchUpstreamRules failure guards', () => {
	afterEach(() => {
		mock.restoreAll();
	});

	it('throws when the upstream response is not ok', async () => {
		stubFetchWith(makeFetchResponse({
			body: '',
			isOk: false,
			status: HTTP_NOT_FOUND,
			statusText: 'Not Found',
		}));

		await assert.rejects(fetchUpstreamRules, /HTTP 404 Not Found/v);
	});

	it('throws when the content-type is not text/html', async () => {
		stubFetchWith(makeFetchResponse({
			body: '{}',
			contentType: 'application/json',
		}));

		await assert.rejects(fetchUpstreamRules, /Unexpected content-type/v);
	});

	it('throws when the content-type header is missing', async () => {
		stubFetchWith(makeFetchResponse({
			body: '',
			contentType: null,
		}));

		await assert.rejects(fetchUpstreamRules, /Unexpected content-type/v);
	});

	it('throws when fewer than the minimum expected rules are parsed', async () => {
		stubFetchWith(makeFetchResponse({
			body: buildRuleHtml(COUNT_BELOW_MINIMUM),
		}));

		await assert.rejects(fetchUpstreamRules, /Parsed only 10 rules/v);
	});
});

describe('fetchUpstreamRules happy path', () => {
	afterEach(() => {
		mock.restoreAll();
	});

	it('returns the parsed rule list when the response is healthy', async () => {
		stubFetchWith(makeFetchResponse({
			body: buildRuleHtml(COUNT_ABOVE_MINIMUM),
		}));

		const names = await fetchUpstreamRules();

		assert.equal(names.length, COUNT_ABOVE_MINIMUM);
		assert.equal(names[ZERO], 'r0');
	});
});

describe('upstream rules match config', () => {
	it('all upstream eslint.org rules are present in the config', async () => {
		const fetched = await fetchUpstreamRules();
		const [ { rules } ] = eslintRules;
		const { missing, extra } = diffRules(Object.keys(rules), fetched);

		assert.deepEqual(missing, [], `Missing from config: ${missing.join(', ')}`);
		assert.deepEqual(extra, [], `Extra in config (removed upstream?): ${extra.join(', ')}`);
	});
});
