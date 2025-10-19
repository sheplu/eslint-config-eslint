import * as cheerio from 'cheerio';
import { eslintRules } from './eslint.js';

const logger = console;
const successExit = 0;
const errorExit = 1;

const page = await fetch('https://eslint.org/docs/latest/rules/');
const html = await page.text();

const $cheerio = cheerio.load(html);
const fetchedRules = [];

// eslint-disable-next-line no-unused-vars
$cheerio('a[class=rule__name]').each((counter, element) => {
	const item = $cheerio(element).text();

	fetchedRules.push(item);
});

const [ { rules } ] = eslintRules;

if (Object.keys(rules).length === fetchedRules.length) {
	logger.log(`Same number of rules ${fetchedRules.length}/${Object.keys(rules).length}`);
	process.exit(successExit);
} else {
	logger.log(`Different number of rules ${fetchedRules.length}/${Object.keys(rules).length}`);
	process.exit(errorExit);
};
