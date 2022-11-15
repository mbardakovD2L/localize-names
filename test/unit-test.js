import { localizeName } from '../src/localize-names.js';

const testName = {
    prefix: 'Dr.',
    givenName: 'Harry',
    middleName: 'Pepper',
    lastName: 'Ham',
    suffix: 'PhD',
    nickname: 'Stinky Man'
}

const expectedName = 'Dr. Harry Pepper "Stinky Man" Ham, PhD'
const resultName = localizeName(testName, 'en');
if (expectedName !== resultName) {
    console.error('TEST FAILED: expected ', expectedName, ', found: ', resultName);
}