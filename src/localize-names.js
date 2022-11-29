const givenFirst = ['prefix', 'givenName', 'middleName', 'surname', 'suffix'];
const surnameFirst = ['surname', 'givenName', 'middleName', 'prefix', 'suffix'];
const locales = [
	'ar-sa',
	'cy-gb',
	'da-dk',
	'de-de',
	'en',
	'en-ca',
	'en-gb',
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
	switch (locale.toLowerCase()) {
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
		.filter(field => nameBlob[field])
		.map(field => processNamePart(nameBlob, field, locale));
	return postProcessName(nameAsArray, locale);
}

const processNamePart = (nameBlob, nameSubcomponent, locale) => {
	switch (locale.toLowerCase()) {
		case 'cy-gb':
		case 'da-dk':
		case 'de-de':
		case 'en':
		case 'en-ca':
		case 'en-gb':
		case 'en-us':
		case 'es-es':
		case 'es-mx':
		case 'fr-ca':
		case 'fr-fr':
		case 'nl-nl':
		case 'pt-br':
		case 'sv-se':
		case 'tr-tr':
			switch (nameSubcomponent) {
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
	switch (locale.toLowerCase()) {
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
