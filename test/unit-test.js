import { localizeName } from '../src/localize-names.js';


const runTest = (testName, nameBlob, locale, expected) => {
	const resultName = localizeName(nameBlob, locale);
	if (resultName !== expected) {
		console.error(`TEST ${testName} FAILED\nexpected:\n${expected}\ngot:\n${resultName}`);
	}
}

const johnnyAppleseed = {
	prefix: 'Mr.',
	givenName: 'Jonathan',
	middleName: 'Maple',
	surname: 'Appleseed',
	suffix: 'Esq.',
	nickname: 'Johnny' 
};

const harry = {
	prefix: 'Dr.',
	givenName: 'Harry',
	surname: 'Ham',
	suffix: 'PhD'
}

const anton = {
	givenName: 'Anton',
	surname: 'Bazhal',
	nickname: 'Well, as always: it depends',
}

const firstLastZH = {
	givenName: '俊年',
	surname: '陈'
}

runTest('full English name', johnnyAppleseed, 'en', 
	'Mr. Jonathan Maple "Johnny" Appleseed, Esq.');

runTest('partial (prefix, given, sur, suffix) English name', harry, 'en', 
	'Dr. Harry Ham, PhD');

runTest('short (given, sur, nickname) English name', anton, 'en', 
	'Anton "Well, as always: it depends" Bazhal');

runTest('short (given, sur) Chinese name', firstLastZH, 'zh',
	'陈俊年')