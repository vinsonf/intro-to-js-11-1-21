const number = 1.75;
let string = 'Hello World' || "Hello World" || `Hello World`;
var boolean = true || false;

// container for all the variables
// object
const object = {
    number: 1.27,
    string: 'Hello World',
    boolean: true,
    '!my var': 'my value',
};
// array
const array = [1.27, 'Hello World', true];

console.log(object['string']); // bracket notation
console.log(array[1]); // bracket notation
console.log(object.string); // dot notation
console.log(array.length); // dot notation

const variableName = '!my vor';
console.log(object.boolean); // dot notation
