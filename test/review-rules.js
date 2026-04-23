const UPSTREAM_URL = 'https://eslint.org/docs/latest/rules/';
const RULE_NAME_PATTERN = /<a[^>]*\sclass="rule__name"[^>]*>(?<name>[^<]+)<\/a>/gv;
const MIN_EXPECTED_RULES = 150;

export function parseUpstreamRules(html) {
	const names = [];

	for (const match of html.matchAll(RULE_NAME_PATTERN)) {
		names.push(match.groups.name.trim());
	}

	return names;
}

export async function fetchUpstreamRules() {
	const page = await fetch(UPSTREAM_URL);

	if (!page.ok) {
		throw new Error(`Failed to fetch ${UPSTREAM_URL}: HTTP ${page.status} ${page.statusText}`);
	}

	const contentType = page.headers.get('content-type') ?? '';

	if (!contentType.includes('text/html')) {
		throw new Error(`Unexpected content-type from ${UPSTREAM_URL}: ${contentType}`);
	}

	const html = await page.text();
	const names = parseUpstreamRules(html);

	if (names.length < MIN_EXPECTED_RULES) {
		const head = `Parsed only ${names.length} rules (expected >= ${MIN_EXPECTED_RULES})`;

		throw new Error(`${head} from ${UPSTREAM_URL} — upstream markup likely changed.`);
	}

	return names;
}

export function diffRules(configRuleNames, upstreamRuleNames) {
	const configRules = new Set(configRuleNames);
	const upstreamRules = new Set(upstreamRuleNames);
	const missing = [ ...upstreamRules ].filter((name) => !configRules.has(name));
	const extra = [ ...configRules ].filter((name) => !upstreamRules.has(name));

	return {
		configRules,
		extra,
		missing,
		upstreamRules,
	};
}
