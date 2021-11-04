

// Primitive Data Types 

// boolean with const
const yes = true;

const no = false;
// number
let numbers = 0;
let number = 1.5;
number = 1.27;
// string
let string = "my name";
let numberOrString = '1';
let string2 = `this has a super power`;
// undefined
var noAnswer = undefined;
const myNull = null;

// 
let score = 0;
let selectUser = undefined;

                // myArray    // answer    // myText     // score;
const memory = [[true], [0], [undefined], ['help'], [2], [0]];
number = 0;


// Edge Case
// BigInt
myBigInt = 19n;
// Symbol
mySymbol = Symbol("my symbol");

// Compound / Complex Data Types
// Array have [];
            //   0, 1, 2, 3, 4
const myArray = [1, 2, 3, 4, 5]; // same type;
const myArray2 = [1, 2, 3, 4, 5, 'a', 'b', 'c', true, false]; // mixed type;

// Object
const myObject = {
    name: 'John', // key: value
    age: 30,
}
// bracket notation
console.log(myArray[4]);
console.log(myObject['name']);

// dot notation
console.log(myObject.name);
console.log(myArray[0]); // arrays cannot be accessed with dot notation (myArray.0)

// Data Types continued...

const myElement = document.getElementById('myElement');
console.log(myElement);
myElement.innerHTML = '<h1>Hello World</h1>';
