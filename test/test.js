import { equal } from 'assert';
import { localizeName } from '../src/localize-names.js';

describe('localizeName', () => {
	describe('cy-gb', () => {
		it('given middle sur', () => {
			equal(localizeName({
				givenName: 'Eva',
				middleName: 'Sophia',
				surname: 'van der Wolf'
			}, 'cy-gb'), 'Eva Sophia van der Wolf');
		});
	});

	describe('da-dk', () => {
		it('given middle sur prefix suffix', () => {
			equal(localizeName({
				givenName: 'Sofie',
				middleName: 'Amelie', 
				surname: 'von Holstein',
				prefix: 'Dr.',
				suffix: 'Cand.med., Ph.d.'
			}, 'da-dk'), 'Dr. Sofie Amelie von Holstein, Cand.med., Ph.d.');
		});
	});
	
	describe('de-de', () => {
		it('sur given middle', () => {
			equal(localizeName({
				surname: 'Mustermann',
				givenName: 'Erika',
				middleName: 'Anna'
			}, 'de-de'), 'Erika Anna Mustermann');
		});
	});

	describe('en-us', () => {
		it('prefix given middle sur suffix', () => {
			equal(localizeName({
				prefix: 'Mr.',
				givenName: 'Jonathan',
				middleName: 'Maple',
				surname: 'Appleseed',
				suffix: 'Esq.',
			}, 'en-us'), 'Mr. Jonathan Maple Appleseed, Esq.');
		});

		it('prefix given sur suffix', () => {
			equal(localizeName({
				prefix: 'Dr.',
				givenName: 'Harry',
				surname: 'Ham',
				suffix: 'PhD'
			}, 'en-us'), 'Dr. Harry Ham, PhD');
		});

		it('suffix sur prefix given', () => {
			equal(localizeName({
				suffix: 'PhD',
				surname: 'Ham',
				prefix: 'Dr.',
				givenName: 'Harry',
			}, 'en-us'), 'Dr. Harry Ham, PhD');
		});
	});

	describe('es-es', () => {
		it('given middle sur prefix', () => {
			equal(localizeName({
				givenName: 'María José',
				middleName: 'Ana Belén',
				surname: 'del Río García Serrano',
				prefix: 'Dra.'
			}, 'es-es'), 'Dra. María José Ana Belén del Río García Serrano');
		});
	});

	describe('es-mx', () => {
		it('sur given middle', () => {
			equal(localizeName({
				surname: 'Ruiz',
				givenName: 'Rosa',
				middleName: 'María'
			}, 'es-mx'), 'Rosa María Ruiz');
		});
	});

	describe('fr-ca', () => {
		it('given sur', () => {
			equal(localizeName({
				givenName: 'Anne',
				surname: 'Dupont'
			}, 'fr-ca'), 'Anne Dupont');
		});
	});

	describe('fr-fr', () => {
		it('prefix given middle sur', () => {
			equal(localizeName({
				prefix: 'Pr',
				givenName: 'Marie-Amélie',
				middleName: 'Anne-Laure',
				surname: 'de la Fontaine Barbier Thiefin'
			}, 'fr-fr'), 'Pr Marie-Amélie Anne-Laure de la Fontaine Barbier Thiefin');
		});
	});

	describe('hi-in', () => {
		it('given sur', () => {
			equal(localizeName({
				givenName: 'ललित',
				surname: 'भारती'
			}, 'hi-in'), 'ललित भारती');
		});
	});

	describe('ja-jp', () => {
		it('given sur', () => {
			equal(localizeName({
				givenName: '花子',
				surname: '山田'
			}, 'ja-jp'), '山田花子');
		});
	});

	describe('ko-kr', () => {
		it('sur given', () => {
			equal(localizeName({
				surname: '홍',
				givenName: '길동'
			}, 'ko-kr'), '홍길동');
		});
	});

	describe('nl-nl', () => {
		it('given middle surname suffix', () => {
			equal(localizeName({
				givenName: 'Ingrid',
				middleName: 'Francina Zoë',
				surname: 'van den Berg Wolff Metternich',
				suffix: 'PhD'
			}, 'nl-nl'), 'Ingrid Francina Zoë van den Berg Wolff Metternich, PhD');
		});
	});

	describe('pt-br', () => {
		it('prefix given middle surname suffix', () => {
			equal(localizeName({
				prefix: 'Prof. Dr.',
				givenName: 'Maria Luiza',
				middleName: 'Maria Eduarda',
				surname: 'dos Santos Pereira Santos',
				suffix: 'Dr. Ph.D'
			}, 'pt-br'), 'Prof. Dr. Maria Luiza Maria Eduarda dos Santos Pereira Santos, Dr. Ph.D');
		});
	});

	describe('sv-se', () => {
		it('prefix given middle surname suffix', () => {
			equal(localizeName({
				prefix: 'Prof. dr.',
				givenName: 'Ann-Christine',
				middleName: 'Eva Sofia',
				surname: 'van den Karlsson Beck Strand',
				suffix: 'med. dr. fil. dr. jur. dr.',
			}, 'sv-se'), 'Prof. dr. Ann-Christine Eva Sofia van den Karlsson Beck Strand, med. dr. fil. dr. jur. dr.');
		});
	});

	describe('tr-tr', () => {
		it('prefix given middle surname suffix', () => {
			equal(localizeName({
				prefix: 'Prof. Dr.',
				givenName: 'Fatma',
				middleName: 'Su',
				surname: 'Demir Kaya',
				suffix: 'M.D. Ph.D.',
			}, 'tr-tr'), 'Prof. Dr. Fatma Su Demir Kaya, M.D. Ph.D.');
		});
	});

	describe('zh-cn', () => {
		it('given sur', () => {
			equal(localizeName({
				givenName: '明',
				surname: '张'
			}, 'zh-cn'), '张明');
		});
		it('sur given', () => {
			equal(localizeName({
				surname: '李',
				givenName: '华'
			}, 'zh-cn'), '李华');
		});
		it('prefix sur', () => {
			equal(localizeName({
				surname: '王',
				prefix: '老师'
			}, 'zh-cn'), '王老师');
		});
	});

	describe('zh-tw', () => {
		it('given sur', () => {
			equal(localizeName({
				givenName: '文博',
				surname: '石',
			}, 'zh-tw'), '石文博');
		});
	});
});
