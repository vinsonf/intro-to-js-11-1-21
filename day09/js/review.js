 const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('you clicked on the button')
});

// type cases

// camel case - myFunction (first word lowercase) (next word is connected and Capitalized)

// Pascal case - MyFunction (first word is Capitalized) (next word is connected and Capitalized) signifying that it is a class

// snake case - my_function (first word lowercase) (next word is connected with _ and lowercase)

// kebab case - my-function (first word lowercase) (next word is connected with - and lowercase)

// upper case snake case - MY_FUNCTION (first word is Capitalized) (next word is connected with _ and lowercase)

const string = 'hello world';
const dataTypes = {
    primitives: {
        boolean: true || false || new Boolean(true) || new Boolean(false),

        string: `${string + 27}` || "string" || 'string' || new String('string'),
        symbol: Symbol('my symbol'),

        number: 27 || 27.1 || -27.2 || new Number('21'), // number
        bigInt: BigInt(27), // bigInt (number)
        Infinity: Infinity, // Infinity (number)
      
        NaN: NaN, // NaN (number)


        null: null,
        undefined: undefined,
      

    },
    compound: {
        object: {} || new Object(), // key value pairs
        array: [] || new Array(), // ordered list
    }
};
console.log(dataTypes);

const variableTypes = {
    var: 'var', // function scope, re-assigned re-declared
    let: 'let', // block scope re-assigned but not redefined
    const: 'const', // block scope not be re-assigned or redefined
}

const operators = {
    arithmetic: {
        addition: '+',
        subtraction: '-',
        multiplication: '*',
        division: '/',
        modulus: '%',
    },
    assignment: {
        addition: '+=',
        subtraction: '-=',
        multiplication: '*=',
        division: '/=',
        modulus: '%=',
    },
    comparison: {
        equal: '==', // 1 == "1" -> true
        doubleEqual: '===', // 1 === "1" -> false
        notEqual: '!=', // 1 != "1" -> false
        notDoubleEqual: '!==', // 1 !== "1" -> true
        greaterThan: '>',
        greaterThanOrEqual: '>=',
        lessThan: '<',
        lessThanOrEqual: '<=',
    },
    logical: {
        and: '&&',
        or: '||',
        not: '!',
    },
}

const builtInMethods = {
    string: {
        length: 'length',
        toUpperCase: 'toUpperCase',
        toLowerCase: 'toLowerCase',
        charAt: 'charAt',
        concat: 'concat' // string + string,
    },
    array: {
        length: 'length',
        push: 'push', // add to end
        pop: 'pop', // remove from end
        shift: 'shift', // remove from beginning
        unshift: 'unshift', // add to beginning
        slice: 'slice', // return a new array from a given index to another index
        splice: 'splice', // remove from a given index to another index and add new elements
        join: 'join', // join all elements of an array into a string
        sort: 'sort', // sort the elements of an array based on a given function

    },
    object: {
        keys: 'keys', // return an array of all the keys of an object,
        values: 'values', // return an array of all the values of an object,
        entries: 'entries', // return an array of all the key-value pairs of an object,
    },
    date: {
        getDate: 'getDate', // return the day of the month (from 1 to 31)
        getDay: 'getDay', // return the day of the week (from 0 to 6)
        getFullYear: 'getFullYear', // return the four digit year
        getHours: 'getHours', // return the hour (from 0 to 23)
        getMonth: 'getMonth', // return the month (from 0 to 11)
        getMinutes: 'getMinutes', // return the minutes (from 0 to 59)
        setDate: 'setDate', // set the day of the month (from 1 to 31)
        setFullYear: 'setFullYear', // set the four digit year
        setHours: 'setHours', // set the hour (from 0 to 23)
        setMinutes: 'setMinutes', // set the minutes (from 0 to 59)
        setMonth: 'setMonth', // set the month (from 0 to 11)
        setSeconds: 'setSeconds', // set the seconds (from 0 to 59)
    },
    math: {
        abs: 'abs', // return the absolute value of a number
        random: 'random', // return a random number between 0 and 1
        floor: 'floor', // return the largest integer less than or equal to a number
        ceil: 'ceil', // return the smallest integer greater than or equal to a number
        round: 'round', // return the value of a number rounded to the nearest integer
        max: 'max', // return the largest of zero or more numbers
        min: 'min', // return the smallest of zero or more numbers
    },
    number: {
        toFixed: 'toFixed', // return a string representing the number in fixed-point notation
        toString: 'toString', // return a string representing the number
    },
    regexp: {
        exec: 'exec', // return the result of matching a regular expression against a string
        test: 'test', // return true if a regular expression successfully matches a string
    },
}


// regex examples

const phoneNumber = '123-456-7890';
const phoneNumberRegex = /\d{3}-\d{3}-\d{4}/;
const result = phoneNumberRegex.exec(phoneNumber);
console.log(result);
const result2 = phoneNumberRegex.test(phoneNumber);
console.log(result2);

const phoneNumber2 = '(123)456-7890';
const phoneNumber2Regex = /\(\d{3}\)\d{3}-\d{4}/gi;
const result3 = phoneNumber2Regex.exec(phoneNumber2);
const result4 = phoneNumber2Regex.test(phoneNumber2);
console.log(result3);
console.log(result4);

// control flow
// if, else if, else
if (result4){
    if (typeof phoneNumber !== 'string'){
         alert('not a string');
    }
    console.log('valid phone number');
}

if (result4){
    console.log('valid phone number');
} else {
    console.log('invalid phone number');
}

if(result4){
    console.log('valid phone number');
}
else if(result3){
    console.log('valid phone number too');

} else {
    console.log('invalid phone number');
}
// switch, case
const day = 'sunday';
switch(day){

    case 'monday':
        console.log('happy monday');
        break;
    case 'tuesday':
        console.log('happy tuesday');
        break;
    case 'wednesday':
        console.log('happy wednesday');
        break;
    case 'thursday':
        console.log('happy thursday');
        break;
    case 'friday':
        console.log('happy friday');
        break;
        default:
            console.log('happy weekend');
}
// ternary operator
const age = 18;
if (typeof age !== 'number'){
    alert('not a number');
}
const canVote = age >= 18 ? 'yes' : 'no';


// functions vs methods
// functions are not associated with an object
// methods are associated with an object


// function declaration
function add(a, b){ // a and b are parameters
    return a + b; // return is a keyword
}
const answer = add(1, 2); // 1 and 2 are arguments, value of answer is 3 (1 + 2) is returned
console.log(answer);

