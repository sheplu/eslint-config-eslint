import * as cheerio from 'cheerio';
import config from './eslint.js';

const page = await fetch("https://eslint.org/docs/latest/rules/");
const data = await page.text();

const $ = cheerio.load(data);
const rules = []
$('a[class=rule__name]').each((i, element) => {
    rules.push($(element).text())
});

if( Object.keys(config[0].rules).length === rules.length ) {
    console.log(`Same number of rules ${rules.length} / ${Object.keys(config[0].rules).length}`);
    process.exit(0);
    
}
else {
    console.log(`Different number of rules ${rules.length} / ${Object.keys(config[0].rules).length}`);
    process.exit(1);
};
