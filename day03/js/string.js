console.log('hi i am a string'.replace('a', 'A')); // hi I am A string
console.log('hi i am a string'.replaceAll('a', 'A')); // hi I am A string
console.log('hi i am a string'.charAt(10));       // i
console.log('hi i am a string'[10]);              // i
console.log('hi i am a string'.length);           // 12
console.log('hi i am a string'.charCodeAt(0));
console.log('hi i am a string'.concat('!', '...'));
console.log('hi i am a string'.endsWith('string'));
console.log('hi i am a string'.bold());
console.log('hi i am a string'.fontcolor('red'));
console.log('hi i am a string'.includes('am')); // true
console.log('hi i am a string'.indexOf('a')); // 2
console.log('hi i am a string'.lastIndexOf('a'));
console.log('hi i am a string'.match(/a/g));
console.log('1'.padStart(2, '0'));
console.log('1'.padEnd(2, '0'));
console.log('hi i am a string'.repeat(3));
console.log('hi i am a string'.search('a'));
console.log('hi i am a string'.slice(2, 1)); // i
console.log('hi i am a string'.split(' ')); // ['hi', 'i', 'am', 'a', 'string']
console.log('hi i am a string'.startsWith('hi'));
console.log('hi i am a string'.substr(2, 10)); 
console.log('hi i am a string'.substring(2, 1));
console.log('hi I am a string'.toLowerCase());
console.log('hi I am a string'.toUpperCase());
console.log('    hi I am a string        '.trim());
console.log('    hi I am a string        '.trimStart());
console.log('    hi I am a string        '.trimEnd()); 
console.log('    hi I am a string        '.trimLeft());
console.log('    hi I am a string        '.trimRight());
console.log('    hi I am a string        '.trimLeft().trimRight());

const user = {
    id: 1,
    _id: 'xjjsljuejel393lz',
    randomId: Math.random(),
}

// http request/ api / internet format / json
const stringUser = JSON.stringify(user);
console.log(stringUser);
console.log(JSON.parse(stringUser));
