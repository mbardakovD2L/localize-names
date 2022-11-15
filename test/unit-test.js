import { localizeName } from '../src/localize-names.js';


const runTest = (testName, nameBlob, locale, expected) => {
	const resultName = localizeName(nameBlob, locale);
	if (resultName !== expected) {
		console.error(`TEST ${testName} FAILED\nexpected:\n${expected}\ngot:\n${resultName}`);
	}
}

runTest('full english name', {
	prefix: 'Mr.',
	givenName: 'Jonathan',
	middleName: 'Maple',
	surname: 'Appleseed',
	suffix: 'Esq.',
	nickname: 'Johnny' }, 
	'en', 
	'Mr. Jonathan Maple "Johnny" Appleseed, Esq.');

runTest('partial (prefix, first, last, suffix) english name', {
	prefix: 'Dr.',
	givenName: 'Harry',
	surname: 'Ham',
	suffix: 'PhD',}, 
	'en', 
	'Dr. Harry Ham, PhD');

runTest('short (given, last, nickname) english name', {
	givenName: 'Anton',
	surname: 'Bazhal',
	nickname: 'Well, as always: it depends',}, 
	'en', 
	'Anton "Well, as always: it depends" Bazhal');