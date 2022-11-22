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

runTest('cy-gb, Given Middle Sur', {
	givenName: 'Eva',
	middleName: 'Sophia',
	surname: 'van der Wolf'
}, 'cy-gb', 'Eva Sophia van der Wolf');

runTest('cy-gb, Given Middle Sur Suffix', {
	givenName: 'Hugh',
	middleName: 'R.',
	surname: 'Jones',
	suffix: 'M.A., M.D.'
}, 'cy-gb', 'Hugh R. Jones, M.A., M.D.');

runTest('da-dk, Given Middle Sur Prefix Suffix', {
	givenName: 'Sofie',
	middleName: 'Amelie', 
	surname: 'von Holstein',
	prefix: 'Dr.',
	suffix: 'Cand.med., Ph.d.'
}, 'da-dk', 'Dr. Sofie Amelie von Holstein, Cand.med., Ph.d.');

runTest('de-de, Sur Given Middle', {
	surname: 'Mustermann',
	givenName: 'Erika',
	middleName: 'Anna'
}, 'de-de', 'Erika Anna Mustermann');

runTest('en-us, Prefix Given Middle Sur Suffix Nick', {
	prefix: 'Mr.',
	givenName: 'Jonathan',
	middleName: 'Maple',
	surname: 'Appleseed',
	suffix: 'Esq.',
	nickname: 'Johnny'
}, 'en-us', 'Mr. Jonathan Maple "Johnny" Appleseed, Esq.');

runTest('en-us, Prefix Given Sur Suffix', {
	prefix: 'Dr.',
	givenName: 'Harry',
	surname: 'Ham',
	suffix: 'PhD'
}, 'en-us', 'Dr. Harry Ham, PhD');

runTest('en-us, Suffix Sur Prefix Given', {
	suffix: 'PhD',
	surname: 'Ham',
	prefix: 'Dr.',
	givenName: 'Harry',
}, 'en-us', 'Dr. Harry Ham, PhD');

runTest('en-us, Given Sur Nick', {
	givenName: 'Anton',
	surname: 'Bazhal',
	nickname: 'Well, as always: it depends',
}, 'en-us', 'Anton "Well, as always: it depends" Bazhal');

runTest('es-es, Given Middle Sur Prefix', {
	givenName: 'María José',
	middleName: 'Ana Belén',
	surname: 'del Río García Serrano',
	prefix: 'Dra.'
}, 'es-es', 'Dra. María José Ana Belén del Río García Serrano');

runTest('es-mx, Sur Given Middle', {
	surname: 'Ruiz',
	givenName: 'Rosa',
	middleName: 'María'
}, 'es-mx', 'Rosa María Ruiz');

runTest('fr-ca, Given Sur', {
	givenName: 'Anne',
	surname: 'Dupont'
}, 'fr-ca', 'Anne Dupont');

runTest('fr-fr, Prefix Given Middle Sur', {
	prefix: 'Pr',
	givenName: 'Marie-Amélie',
	middleName: 'Anne-Laure',
	surname: 'de la Fontaine Barbier Thiefin'
}, 'fr-fr', 'Pr Marie-Amélie Anne-Laure de la Fontaine Barbier Thiefin');

runTest('hi-in, Given Sur', {
	givenName: 'ललित',
	surname: 'भारती'
}, 'hi-in', 'ललित भारती');

runTest('ja-jp, Given Sur', {
	givenName: '花子',
	surname: '山田'
}, 'ja-jp', '山田花子');

runTest('ko-kr, Sur Given', {
	surname: '홍',
	givenName: '길동'
}, 'ko-kr', '홍길동');

runTest('nl-nl, Given Surname Suffix', {
	givenName: 'Ingrid',
	middleName: 'Francina Zoë',
	surname: 'van den Berg Wolff Metternich',
	suffix: 'PhD'
}, 'nl-nl', 'Ingrid Francina Zoë van den Berg Wolff Metternich, PhD');

runTest('pt-br, Prefix Given Middle Surname Suffix', {
	prefix: 'Prof. Dr.',
	givenName: 'Maria Luiza',
	middleName: 'Maria Eduarda',
	surname: 'dos Santos Pereira Santos',
	suffix: 'Dr. Ph.D'
}, 'pt-br','Prof. Dr. Maria Luiza Maria Eduarda dos Santos Pereira Santos, Dr. Ph.D');

runTest('sv-se, Prefix Given Middle Surname Suffix', {
	prefix: 'Prof. dr.',
	givenName: 'Ann-Christine',
	middleName: 'Eva Sofia',
	surname: 'van den Karlsson Beck Strand',
	suffix: 'med. dr. fil. dr. jur. dr.',
}, 'sv-se', 'Prof. dr. Ann-Christine Eva Sofia van den Karlsson Beck Strand, med. dr. fil. dr. jur. dr.');

runTest('tr-tr, Prefix Given Middle Surname Suffix', {
	prefix: 'Prof. Dr.',
	givenName: 'Fatma',
	middleName: 'Su',
	surname: 'Demir Kaya',
	suffix: 'M.D. Ph.D.',
}, 'tr-tr', 'Prof. Dr. Fatma Su Demir Kaya, M.D. Ph.D.');

runTest('zh-cn, Given Sur', {
	givenName: '明',
	surname: '张'
}, 'zh-cn', '张明');

runTest('zh-cn, Sur Given', {
	surname: '李',
	givenName: '华'
}, 'zh-cn', '李华');

runTest('zh-cn, Prefix Sur', {
	surname: '王',
	prefix: '老师'
}, 'zh-cn', '王老师');
