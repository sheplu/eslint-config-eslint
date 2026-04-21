const UPSTREAM_URL = 'https://eslint.org/docs/latest/rules/';
const RULE_NAME_PATTERN = /<a[^>]*\sclass="rule__name"[^>]*>(?<name>[^<]+)<\/a>/gv;

export function parseUpstreamRules(html) {
	const names = [];

	for (const match of html.matchAll(RULE_NAME_PATTERN)) {
		names.push(match.groups.name.trim());
	}

	return names;
}

export async function fetchUpstreamRules() {
	const page = await fetch(UPSTREAM_URL);
	const html = await page.text();

	return parseUpstreamRules(html);
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
