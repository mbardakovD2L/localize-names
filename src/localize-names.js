const givenFirst = [ 'prefix', 'givenName', 'middleName', 'nickname', 'surname', 'suffix' ];
const surnameFirst = [ 'prefix', 'surname', 'givenName', 'middleName', 'nickname', 'suffix' ];

const fieldsOrderMap = (locale) => {
	switch (locale){
		case 'ja': return surnameFirst;
		case 'ko': return surnameFirst;
		case 'vi': return surnameFirst;
		case 'yue': return surnameFirst;
		case 'zh': return surnameFirst;
		default: return givenFirst;
	}
}

// https://github.com/unicode-org/cldr/blob/95363e0fbfe9a2be510dd4783bfd8f69aca07d85/common/main/en.xml#L9301
// TODO: maybe add a "level of formality" setting too? and a length? make it more analogous to above link?

const localizeName = (nameBlob, locale) => {
	return fieldsOrderMap(locale)
		.filter(locale => nameBlob[locale])
		.map(field => processNamePart(nameBlob, field, locale))
		.join(' ').replace(' , ', ', ');
	// the last post-pocessing call might only be applicable in en, other languages may have other grammar rules
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

export { localizeName }