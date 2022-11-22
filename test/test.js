import { equal } from 'assert';
import { localizeName } from '../src/localize-names.js';

describe('localizeName', () => {
  describe('cy-gb', () => {
    it('should display cy-gb names with surname last', () => {
      equal(localizeName({
        givenName: 'Eva',
        middleName: 'Sophia',
        surname: 'van der Wolf'
    }, 'cy-gb'), 'Eva Sophia van der Wolf');
    });
  });
});