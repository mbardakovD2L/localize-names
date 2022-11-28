# localize-names
Localize order of Given Name, Surname, Prefixes, Suffixes, etc. based on the given locale. Resulting name string will be ordered and formatted accordingly.

## Usage

Call `localizeName` with a name object and a locale, where a name object consists of any combination of the following:
```js
{
    prefix: string, // optional
    givenName: string, // optional
    middleName: string, // optional
    surname: string, // optional
    suffix: string, // optional
}
```
and the locale is one of:
```js
'ar-sa',
'cy-gb',
'da-dk',
'de-de',
'en-us',
'es-es',
'es-mx',
'fr-ca',
'fr-fr',
'hi-in',
'ja-jp',
'ko-kr',
'nl-nl',
'pt-br',
'sv-se',
'tr-tr',
'zh-cn',
'zh-tw'
```
for example:
```js
console.log(localizeName({
    suffix: 'PhD',
    surname: 'Ham',
    prefix: 'Dr.',
    givenName: 'Harry',
}, 'en-us'));

> 'Dr. Harry Ham, PhD';
```