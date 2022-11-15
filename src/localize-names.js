const helloIAmAFunction = () => {
    console.log('I am a side effect');
    return 'I am a return value';
}

// a name can have:
// givenName, middleName, lastName, prefix, suffix, nickname
// e.g. Dr. Harry "Stinky Man" Pepper Ham, PhD.
// =>
// givenName: Harry
// middleName: Pepper
// lastName: Ham
// prefix: Dr.
// suffix: PhD
// nickname: Stinky Man

const fieldsOrderMap = {
    'en': [
        'prefix', 'givenName', 'middleName', 'nickname', 'lastName', 'suffix'
    ]
}

const localizeName = (nameBlob, locale) => {
    switch (locale) {
        case 'en':
            return fieldsOrderMap[locale].map(field => helper(nameBlob, field, locale)).join(' ').replace(' , ', ', ');
    }
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

// todo: pass each name fragment through a sub-formatter that itself handles things like the comma before the title, or the quotes around nickname
export { localizeName }