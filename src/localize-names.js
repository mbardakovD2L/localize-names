const givenFirst = ['prefix', 'givenName', 'middleName', 'nickname', 'surname', 'suffix'];
const surnameFirst = ['surname', 'givenName', 'middleName', 'prefix', 'nickname', 'suffix'];
const locales = ['ar-sa',
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
	'zh-tw']

const fieldsOrderMap = (locale) => {
	switch (locale) {
		case 'ja-jp':
		case 'ko-kr':
		case 'zh-cn':
		case 'zh-tw': return surnameFirst;
		default: return givenFirst;
	}
}

// https://github.com/unicode-org/cldr/blob/95363e0fbfe9a2be510dd4783bfd8f69aca07d85/common/main/en.xml#L9301
// TODO: maybe add a 'level of formality' setting too? and a length? make it more analogous to above link?

const localizeName = (nameBlob, locale) => {
	const nameAsArray = fieldsOrderMap(locale)
		.filter(locale => nameBlob[locale])
		.map(field => processNamePart(nameBlob, field, locale));
	return postProcessName(nameAsArray, locale);
}

const processNamePart = (nameBlob, nameSubcomponent, locale) => {
	switch (locale) {
		case 'cy-gb':
		case 'da-dk':
		case 'de-de':
		case 'en-us':
			switch (nameSubcomponent) {
				case 'nickname':
					return `"${nameBlob.nickname}"`;
				case 'suffix':
					return Object.keys(nameBlob).filter(part => fieldsOrderMap(locale).includes(part) && part !== 'suffix') ?
						`, ${nameBlob.suffix}` : nameBlob.suffix;
				default:
					return nameBlob[nameSubcomponent];
			}
		default:
			return nameBlob[nameSubcomponent];
	}
}

const postProcessName = (nameArray, locale) => {
	switch (locale) {
		case 'ja-jp':
		case 'ko-kr':
		case 'zh-cn':
		case 'zh-tw':
			return nameArray.join('');
		default:
			return nameArray.join(' ').replace(' , ', ', ')
	}
}

export { localizeName }