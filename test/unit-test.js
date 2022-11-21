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

runTest('English name, Prefix Given Middle Sur Suffix Nick', {
	prefix: 'Mr.',
	givenName: 'Jonathan',
	middleName: 'Maple',
	surname: 'Appleseed',
	suffix: 'Esq.',
	nickname: 'Johnny'
}, 'en-us', 'Mr. Jonathan Maple "Johnny" Appleseed, Esq.');

runTest('English name, Prefix Given Sur Suffix', {
	prefix: 'Dr.',
	givenName: 'Harry',
	surname: 'Ham',
	suffix: 'PhD'
}, 'en-us', 'Dr. Harry Ham, PhD');

runTest('English name, Suffix Sur Prefix Given', {
	suffix: 'PhD',
	surname: 'Ham',
	prefix: 'Dr.',
	givenName: 'Harry',
}, 'en-us', 'Dr. Harry Ham, PhD');

runTest('English name, Given Sur Nick', {
	givenName: 'Anton',
	surname: 'Bazhal',
	nickname: 'Well, as always: it depends',
}, 'en-us', 'Anton "Well, as always: it depends" Bazhal');

runTest('Chinese name, Given Sur', {
	givenName: '明',
	surname: '张'
}, 'zh-cn', '张明');

runTest('Chinese name, Sur Given', {
	surname: '李',
	givenName: '华'
}, 'zh-cn', '李华');

runTest('Chinese name, Prefix Sur', {
	surname: '王',
	prefix: '老师'
}, 'zh-cn', '王老师');

runTest('French name, Given Sur', {
	givenName: 'Anne',
	surname: 'Dupont'
}, 'fr-fr', 'Anne Dupont');

runTest('German name, Sur Given Middle', {
	surname: 'Mustermann',
	givenName: 'Erika',
	middleName: 'Anna'
}, 'de-de', 'Erika Anna Mustermann');

runTest('Japanese name, Given Sur', {
	givenName: '花子',
	surname: '山田'
}, 'ja-jp', '山田花子');

runTest('Korean name, Sur Given', {
	surname: '홍',
	givenName: '길동'
}, 'ko-kr', '홍길동');

runTest('Hindi name, Given Sur', {
	givenName: 'ललित',
	surname: 'भारती'
}, 'hi-in', 'ललित भारती');

runTest('Welsh name, Given Middle Sur', {
	givenName: 'Eva',
	middleName: 'Sophia',
	surname: 'van der Wolf'
}, 'cy-gb', 'Eva Sophia van der Wolf');

runTest('Welsh name, Given Middle Sur Suffix', {
	givenName: 'Hugh',
	middleName: 'R.',
	surname: 'Jones',
	suffix: 'M.A., M.D.'
}, 'cy-gb', 'Hugh R. Jones, M.A., M.D.');

runTest('Danish name, Given Middle Sur Prefix Suffix', {
	givenName: 'Sofie',
	middleName: 'Amelie', 
	surname: 'von Holstein',
	prefix: 'Dr.',
	suffix: 'Cand.med., Ph.d.'
}, 'da-dk', 'Dr. Sofie Amelie von Holstein, Cand.med., Ph.d.');