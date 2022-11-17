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
};

const harryScrambled = {
	suffix: 'PhD',
	surname: 'Ham',
	prefix: 'Dr.',
	givenName: 'Harry',
}

const anton = {
	givenName: 'Anton',
	surname: 'Bazhal',
	nickname: 'Well, as always: it depends',
}

const firstLastZH = {
	givenName: '明',
	surname: '张'
}

const lastFirstZH = {
	surname: '李',
	givenName: '华'
}

runTest('full English name', johnnyAppleseed, 'en', 
	'Mr. Jonathan Maple "Johnny" Appleseed, Esq.');

runTest('partial (prefix, given, sur, suffix) English name', harry, 'en', 
	'Dr. Harry Ham, PhD');

runTest('partial (prefix, given, sur, suffix) English name; not ordered by default', harryScrambled, 'en', 
	'Dr. Harry Ham, PhD');

runTest('short (given, sur, nickname) English name', anton, 'en', 
	'Anton "Well, as always: it depends" Bazhal');

runTest('short (given, sur) Chinese name', firstLastZH, 'zh',
	'张明');

runTest('short (sur, given) Chinese name', lastFirstZH, 'zh',
	'李华');
