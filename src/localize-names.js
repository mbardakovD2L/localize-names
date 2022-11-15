const fieldsOrderMap = {
	'en': [
		'prefix', 'givenName', 'middleName', 'nickname', 'lastName', 'suffix'
	]
}

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