const givenFirst = [ 'prefix', 'givenName', 'middleName', 'nickname', 'lastName', 'suffix' ];
const surnameFirst = [ 'prefix', 'lastName', 'givenName', 'middleName', 'nickname', 'suffix' ];

const fieldsOrderMap = {
	'en': givenFirst,
	'ja': surnameFirst,
	'ko': surnameFirst,
	'vi': surnameFirst,
	'yue': surnameFirst,
	'zh': surnameFirst
}

// https://github.com/unicode-org/cldr/blob/95363e0fbfe9a2be510dd4783bfd8f69aca07d85/common/main/en.xml#L9301
// <nameOrderLocales order="givenFirst">und en</nameOrderLocales>
// <nameOrderLocales order="surnameFirst">ja ko vi yue zh</nameOrderLocales>
// TODO: maybe add a "level of formality" setting too? and a length? make it more analogous to above link?

const localizeName = (nameBlob, locale) => {
	return fieldsOrderMap[locale]
		.filter(locale => nameBlob[locale])
		.map(field => helper(nameBlob, field, locale))
		.join(' ').replace(' , ', ', ');
	// the last post-pocessing call might only be applicable in en, other languages may have other grammar rules
}

const helper = (nameBlob, nameSubcomponent, locale) => {
	switch (locale) {
		case 'en':
			switch (nameSubcomponent) {
				case 'nickname':
					return `"${nameBlob.nickname}"`;
				case 'suffix':
					return Object.keys(nameBlob).filter(part => fieldsOrderMap[locale].includes(part) && part !== 'suffix') ?
						`, ${nameBlob.suffix}` : nameBlob.suffix;
				default:
					return nameBlob[nameSubcomponent];
			}
	}
}

export { localizeName }