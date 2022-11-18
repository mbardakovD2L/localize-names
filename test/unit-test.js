import { localizeName } from '../src/localize-names.js';

const verbose = process.argv.find(arg => arg === '-v' || arg === '--verbose');

const runTest = (testName, nameBlob, locale, expected) => {
	if (!testName || !nameBlob || !locale || !expected) {
		return;
	}
	const resultName = localizeName(nameBlob, locale);
	if (resultName !== expected) {
		console.error(`TEST ${testName} FAILED\nexpected:\n${expected}\ngot:\n${resultName}\n`);
	} else if (verbose) {
		console.log(`TEST ${testName} PASSED\nresult:\n${resultName}\n`);
	}
}

const fullEN = {
	prefix: 'Mr.',
	givenName: 'Jonathan',
	middleName: 'Maple',
	surname: 'Appleseed',
	suffix: 'Esq.',
	nickname: 'Johnny' 
};
runTest('full English name', fullEN, 'en','Mr. Jonathan Maple "Johnny" Appleseed, Esq.');

const harry = {
	prefix: 'Dr.',
	givenName: 'Harry',
	surname: 'Ham',
	suffix: 'PhD'
};
runTest('partial (prefix, given, sur, suffix) English name', harry, 'en', 'Dr. Harry Ham, PhD');


const harryScrambled = {
	suffix: 'PhD',
	surname: 'Ham',
	prefix: 'Dr.',
	givenName: 'Harry',
}
runTest('partial (prefix, given, sur, suffix) English name; not ordered by default', harryScrambled, 'en', 'Dr. Harry Ham, PhD');

const anton = {
	givenName: 'Anton',
	surname: 'Bazhal',
	nickname: 'Well, as always: it depends',
}
runTest('short (given, sur, nickname) English name', anton, 'en', 'Anton "Well, as always: it depends" Bazhal');

const firstLastZH = {
	givenName: '明',
	surname: '张'
}
runTest('short (given, sur) Chinese name', firstLastZH, 'zh', '张明');

const lastFirstZH = {
	surname: '李',
	givenName: '华'
}
runTest('short (sur, given) Chinese name', lastFirstZH, 'zh', '李华');

const firstLastFR = {
	givenName: 'Jean',
	surname: 'Dupont'
}
runTest('short (given, sur) French name', firstLastFR, 'fr', 'Jean Dupont');

const lastFirstMiddleDE = {
	surname: 'Mustermann',
	givenName: 'Erika',
	middleName: 'Anna'
}
runTest('short (sur, given, middle) German name', lastFirstMiddleDE, 'de', 'Erika Anna Mustermann');

const firstLastJP = {
	givenName: '太郎',
	surname: '山田'
}
runTest('short (given, sur) Japanese name', firstLastJP, 'jp', '山田太郎');

const lastFirstKO = {
	surname: '홍',
	givenName: '길동'
}
runTest('short (sur, given) Korean name', lastFirstKO, 'ko', '홍길동');
