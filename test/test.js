import { assert } from 'chai';
import { localizeName } from '../src/localize-names.js';

describe('localizeName', () => {
	describe('cy-gb', () => {
		it('givenName middleName surName', () => {
			const result = localizeName({
				givenName: 'Eva',
				middleName: 'Sophia',
				surname: 'van der Wolf'
			}, 'cy-gb');
			const expected = 'Eva Sophia van der Wolf';

			assert.equal(result, expected);
		});
	});

	describe('da-dk', () => {
		it('givenName middleName surName prefix suffix', () => {
			const result = localizeName({
				givenName: 'Sofie',
				middleName: 'Amelie', 
				surname: 'von Holstein',
				prefix: 'Dr.',
				suffix: 'Cand.med., Ph.d.'
			}, 'da-dk');
			const expected = 'Dr. Sofie Amelie von Holstein, Cand.med., Ph.d.';

			assert.equal(result, expected);
		});
	});
	
	describe('de-de', () => {
		it('surName givenName middleName', () => {
			const result = localizeName({
				surname: 'Mustermann',
				givenName: 'Erika',
				middleName: 'Anna'
			}, 'de-de');
			const expected = 'Erika Anna Mustermann';

			assert.equal(result, expected);
		});
	});

	describe('en-us', () => {
		it('prefix givenName middleName surName suffix', () => {
			const result = localizeName({
				prefix: 'Mr.',
				givenName: 'Jonathan',
				middleName: 'Maple',
				surname: 'Appleseed',
				suffix: 'Esq.',
			}, 'en-us');
			const expected = 'Mr. Jonathan Maple Appleseed, Esq.';

			assert.equal(result, expected);
		});

		it('prefix givenName surName suffix', () => {
			const result = localizeName({
				prefix: 'Dr.',
				givenName: 'Harry',
				surname: 'Ham',
				suffix: 'PhD'
			}, 'en-us');
			const expected = 'Dr. Harry Ham, PhD';

			assert.equal(result, expected);
		});

		it('suffix surName prefix givenName', () => {
			const result = localizeName({
				suffix: 'PhD',
				surname: 'Ham',
				prefix: 'Dr.',
				givenName: 'Harry',
			}, 'en-us');
			const expected = 'Dr. Harry Ham, PhD';

			assert.equal(result, expected);
		});
	});

	describe('es-es', () => {
		it('givenName middleName surName prefix', () => {
			const result = localizeName({
				givenName: 'María José',
				middleName: 'Ana Belén',
				surname: 'del Río García Serrano',
				prefix: 'Dra.'
			}, 'es-es');
			const expected = 'Dra. María José Ana Belén del Río García Serrano';

			assert.equal(result, expected);
		});
	});

	describe('es-mx', () => {
		it('surName givenName middleName', () => {
			const result = localizeName({
				surname: 'Ruiz',
				givenName: 'Rosa',
				middleName: 'María'
			}, 'es-mx');
			const expected = 'Rosa María Ruiz';
			assert.equal(result, expected);
		});
	});

	describe('fr-ca', () => {
		it('givenName surName', () => {
			const result = localizeName({
				givenName: 'Anne',
				surname: 'Dupont'
			}, 'fr-ca');
			const expected = 'Anne Dupont';

			assert.equal(result, expected);
		});
	});

	describe('fr-fr', () => {
		it('prefix givenName middleName surName', () => {
			const result = localizeName({
				prefix: 'Pr',
				givenName: 'Marie-Amélie',
				middleName: 'Anne-Laure',
				surname: 'de la Fontaine Barbier Thiefin'
			}, 'fr-fr');
			const expected = 'Pr Marie-Amélie Anne-Laure de la Fontaine Barbier Thiefin';

			assert.equal(result, expected);
		});
	});

	describe('hi-in', () => {
		it('givenName surName', () => {
			const result = localizeName({
				givenName: 'ललित',
				surname: 'भारती'
			}, 'hi-in');
			const expected = 'ललित भारती';

			assert.equal(result, expected);
		});
	});

	describe('ja-jp', () => {
		it('givenName surName', () => {
			const result = localizeName({
				givenName: '花子',
				surname: '山田'
			}, 'ja-jp');
			const expected = '山田花子';

			assert.equal(result, expected);
		});
	});

	describe('ko-kr', () => {
		it('surName givenName', () => {
			const result = localizeName({
				surname: '홍',
				givenName: '길동'
			}, 'ko-kr');
			const expected = '홍길동';

			assert.equal(result, expected);
		});
	});

	describe('nl-nl', () => {
		it('givenName middleName surname suffix', () => {
			const result = localizeName({
				givenName: 'Ingrid',
				middleName: 'Francina Zoë',
				surname: 'van den Berg Wolff Metternich',
				suffix: 'PhD'
			}, 'nl-nl');
			const expected = 'Ingrid Francina Zoë van den Berg Wolff Metternich, PhD';

			assert.equal(result, expected);
		});
	});

	describe('pt-br', () => {
		it('prefix givenName middleName surname suffix', () => {
			const result = localizeName({
				prefix: 'Prof. Dr.',
				givenName: 'Maria Luiza',
				middleName: 'Maria Eduarda',
				surname: 'dos Santos Pereira Santos',
				suffix: 'Dr. Ph.D'
			}, 'pt-br');
			const expected = 'Prof. Dr. Maria Luiza Maria Eduarda dos Santos Pereira Santos, Dr. Ph.D';

			assert.equal(result, expected);
		});
	});

	describe('sv-se', () => {
		it('prefix givenName middleName surname suffix', () => {
			const result = localizeName({
				prefix: 'Prof. dr.',
				givenName: 'Ann-Christine',
				middleName: 'Eva Sofia',
				surname: 'van den Karlsson Beck Strand',
				suffix: 'med. dr. fil. dr. jur. dr.',
			}, 'sv-se');
			const expected = 'Prof. dr. Ann-Christine Eva Sofia van den Karlsson Beck Strand, med. dr. fil. dr. jur. dr.';

			assert.equal(result, expected);
		});
	});

	describe('tr-tr', () => {
		it('prefix givenName middleName surname suffix', () => {
			const result = localizeName({
				prefix: 'Prof. Dr.',
				givenName: 'Fatma',
				middleName: 'Su',
				surname: 'Demir Kaya',
				suffix: 'M.D. Ph.D.',
			}, 'tr-tr');
			const expected = 'Prof. Dr. Fatma Su Demir Kaya, M.D. Ph.D.';

			assert.equal(result, expected);
		});
	});

	describe('zh-cn', () => {
		it('givenName surName', () => {
			const result = localizeName({
				givenName: '明',
				surname: '张'
			}, 'zh-cn');
			const expected = '张明';

			assert.equal(result, expected);
		});
		it('surName givenName', () => {
			const result = localizeName({
				surname: '李',
				givenName: '华'
			}, 'zh-cn');
			const expected = '李华';

			assert.equal(result, expected);
		});
		it('prefix surName', () => {
			const result = localizeName({
				surname: '王',
				prefix: '老师'
			}, 'zh-cn');
			const expected = '王老师';

			assert.equal(result, expected);
		});
	});

	describe('zh-tw', () => {
		it('givenName surName', () => {
			const result = localizeName({
				givenName: '文博',
				surname: '石',
			}, 'zh-tw');
			const expected = '石文博';

			assert.equal(result, expected);
		});
	});
});
