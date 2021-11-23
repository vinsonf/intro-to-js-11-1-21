// answers 
const primiariveTypes = {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    Infinity: 'Infinity',
}
// sometimes we don't have the answer

const falsyValues = {
    boolean: false,
    number: 0,
    string: '',
    undefined: undefined,
    null: null,
    NaN: NaN,
}

// organize those answers
const complexTypes = {
    object: 'object',
    array: 'array',
}

// variables
const myString = 'hello from a variable';
// property
const myObject = {
    myString : 'hello from an object'
}
// list of items (index)
const myArray = ['hello from an array 1', 'hello from an array 2', 'hello from an array 3'];

console.log(myString);
console.log(myObject.myString); // dot notation
console.log(myObject['myString']); // bracket notation
console.log(myArray[0]); // bracket notation never dot notation


// map, weakMap, set, weakSet

// symbols - unique identifiers
const mySymbol = Symbol();
const myotherSymbol = Symbol();

console.log(mySymbol === myotherSymbol); // false
console.log(mySymbol == myotherSymbol); // false


const myUniqueObject = {
    [mySymbol]: 'hello from a symbol',
    [myotherSymbol]: 'hello from another symbol',
}

console.log(myUniqueObject[myotherSymbol]);