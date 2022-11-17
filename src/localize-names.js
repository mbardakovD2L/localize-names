const givenFirst = [ 'prefix', 'givenName', 'middleName', 'nickname', 'surname', 'suffix' ];
const surnameFirst = [ 'prefix', 'surname', 'givenName', 'middleName', 'nickname', 'suffix' ];

const fieldsOrderMap = (locale) => {
	switch (locale) {
		case 'ja':
		case 'ko':
		case 'vi':
		case 'yue':
		case 'zh': return surnameFirst;
		default: return givenFirst;
	}
}

// https://github.com/unicode-org/cldr/blob/95363e0fbfe9a2be510dd4783bfd8f69aca07d85/common/main/en.xml#L9301
// TODO: maybe add a "level of formality" setting too? and a length? make it more analogous to above link?

const localizeName = (nameBlob, locale) => {
	const nameAsArray = fieldsOrderMap(locale)
		.filter(locale => nameBlob[locale])
		.map(field => processNamePart(nameBlob, field, locale));
		return postProcessName(nameAsArray, locale);
}

const processNamePart = (nameBlob, nameSubcomponent, locale) => {
	switch (locale) {
		default:
			switch (nameSubcomponent) {
				case 'nickname':
					return `"${nameBlob.nickname}"`;
				case 'suffix':
					return Object.keys(nameBlob).filter(part => fieldsOrderMap(locale).includes(part) && part !== 'suffix') ?
						`, ${nameBlob.suffix}` : nameBlob.suffix;
				default:
					return nameBlob[nameSubcomponent];
			}
	}
}

const postProcessName = (nameArray, locale) => {
	switch (locale) {
		case 'ja':
		case 'ko':
		case 'zh':
			return nameArray.join('');
		default:
			return nameArray.join(' ').replace(' , ', ', ')
	}
}

export { localizeName }