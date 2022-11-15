import { localizeName } from '../src/localize-names.js';


const runTest = (nameBlob, locale, expected) => {
	const resultName = localizeName(nameBlob, locale);
	if (resultName !== expected) {
		console.error(`TEST FAILED: expected ${expected}, got ${resultName}`);
	}
}

runTest({
	prefix: 'Mr.',
	givenName: 'Jonathan',
	middleName: 'Maple',
	lastName: 'Appleseed',
	suffix: 'Esq.',
	nickname: 'Johnny' }, 
	'en', 
	'Mr. Jonathan Maple "Johnny" Appleseed, Esq.');

runTest({
	prefix: 'Dr.',
	givenName: 'Harry',
	lastName: 'Ham',
	suffix: 'PhD',}, 
	'en', 
	'Dr. Harry Ham, PhD');