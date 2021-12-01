const variables = {
    declarations: {
        var: {
            updated: true,
            redeclared: true,
            scope: 'functional',
        },
        let: {
            updated: true,
            redeclared: false,
            scope: 'block',
        },
        const: {
            updated: false,
            redeclared: false,
            scope: 'block',
        }
    },
    types: {
        primitives: {
            string: 'string' || "string" || `string${1}`,
            number: 1 || 1.1 || 0b01 || 0o01 || 0x01,
            boolean: true || false,
        },
        compound: {
            array: [],
            object: {},
        },
        extend: {
            htmlElements: document.querySelectorAll('*'),
            Math: Math,
            Date: Date,
            RegExp: RegExp,
            Error: Error,
            Custom: 'Your own class',
        }
    },
    falsey: {
        false: false,
        null: null,
        undefined: undefined,
        NaN: NaN,
        0: 0,
        '': '',
    }
}


const phone = '(559)555-5555';

const pattern = /\(\d{3}\)\d{3}-\d{4}/;


console.log(pattern.test(phone));

if (pattern.test(phone)) {
    console.log("it is a good valid number");
} else {
    throw new Error('I don\'t know what happened');
}


// scope of variables
// functional scope
// block scope

// scope of functions
// functional scope
function func() {
    console.log();
}


// const button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log(this);
//     var a = 1;
//     if (this) {
//         let a = 1;

//         if ( a) {
//             let b = 2;
//             console.log(b);
//         }
//     }
// });

let a = 1;;


const operators = {
    logical: {
        and: '&&',
        or: '||',
        not: '!',
    },
    arithmetic: {
        addition: { value: 1 + 2 },
        subtraction: { value: 1 - 2 },
        multiplication: { value: 1 * 2 },
        division: { value: 1 / 2 },
        modulo: { value: 1 % 2 },
    },
    comparison: {
        equal: { value: 1 == '1' }, // true
        notEqual: { value: 1 != 2 },
        greaterThan: { value: 1 > 2 },
        lessThan: { value: 1 < 2 },
        greaterThanOrEqual: { value: 1 >= 2 },
        lessThanOrEqual: { value: 1 <= 2 },
        strictEqual: { value: 1 === '1' }, // false
    },
    assignment: {
        addition: { value: a += 2 },
        subtraction: { value: a -= 2 },
        multiplication: { value: a *= 2 },
        division: { value: a /= 2 },
        modulo: { value: a %= 2 },
        assign: { value:  a = 1 },
    },

}

let message = 'Hello';

const popups = {
    alert: { syntax: 'alert(message)', value: 'alert("Hello World!");' },
    confirm: { syntax: 'confirm(message)', value: 'confirm("Are you sure?");' },
    prompt: { syntax: 'prompt(message)', value: 'a = prompt("What is your name?");' },
}

const date = { 
    now: { value: new Date().getTime() },
    getDate: { value: new Date().getDate() },
    getDay: { value: new Date().getDay() },
    getFullYear: { value: new Date().getFullYear() },
    getHours: { value: new Date().getHours() },
    getMilliseconds: { value: new Date().getMilliseconds() },
    getMinutes: { value: new Date().getMinutes() },
    getMonth: { value: new Date().getMonth() },
    getSeconds: { value: new Date().getSeconds() },
    getTime: { value: new Date().getTime() },
    getTimezoneOffset: { value: new Date().getTimezoneOffset() },
    getUTCDate: { value: new Date().getUTCDate() },
    getUTCDay: { value: new Date().getUTCDay() },
    getUTCFullYear: { value: new Date().getUTCFullYear() },
    getUTCHours: { value: new Date().getUTCHours() },
    getUTCMilliseconds: { value: new Date().getUTCMilliseconds() },
    getUTCMinutes: { value: new Date().getUTCMinutes() },
    getUTCMonth: { value: new Date().getUTCMonth() },
    getUTCSeconds: { value: new Date().getUTCSeconds() },
    getYear: { value: new Date().getYear() },
    setDate: { value: new Date().setDate(1) },
    setFullYear: { value: new Date().setFullYear(2020) },
    setHours: { value: new Date().setHours(1) },
    setMilliseconds: { value: new Date().setMilliseconds(1) },
    setMinutes: { value: new Date().setMinutes(1) },
    setMonth: { value: new Date().setMonth(1) },
    setSeconds: { value: new Date().setSeconds(1) },
    setTime: { value: new Date().setTime(1) },
    setUTCDate: { value: new Date().setUTCDate(1) },
    setUTCFullYear: { value: new Date().setUTCFullYear(2020) },
    setUTCHours: { value: new Date().setUTCHours(1) },
    setUTCMilliseconds: { value: new Date().setUTCMilliseconds(1) },
    setUTCMinutes: { value: new Date().setUTCMinutes(1) },
    setUTCMonth: { value: new Date().setUTCMonth(1) },
    setUTCSeconds: { value: new Date().setUTCSeconds(1) },
    setYear: { value: new Date().setYear(2020) },
    toDateString: { value: new Date().toDateString() },
    toISOString: { value: new Date().toISOString() },
    toJSON: { value: new Date().toJSON() },
    toLocaleDateString: { value: new Date().toLocaleDateString() },
    toLocaleString: { value: new Date().toLocaleString() },
    toLocaleTimeString: { value: new Date().toLocaleTimeString() },
    toString: { value: new Date().toString() },
    toTimeString: { value: new Date().toTimeString() },
    toUTCString: { value: new Date().toUTCString() },
    valueOf: { value: new Date().valueOf() },
}

const math = {
    abs: { value: Math.abs(-1) },
    acos: { value: Math.acos(1) },
    asin: { value: Math.asin(1) },
    atan: { value: Math.atan(1) },
    atan2: { value: Math.atan2(1, 1) },
    ceil: { value: Math.ceil(1) },
    cos: { value: Math.cos(1) },
    exp: { value: Math.exp(1) },
    floor: { value: Math.floor(1) },
    log: { value: Math.log(1) },
    max: { value: Math.max(1, 1) },
    min: { value: Math.min(1, 1) },
    pow: { value: Math.pow(1, 1) },
    random: { value: Math.random() },
    round: { value: Math.round(1) },
    sin: { value: Math.sin(1) },
    sqrt: { value: Math.sqrt(1) },
    tan: { value: Math.tan(1) },


}

console.log(date['getFullYear']);

const controlFlow = {
    if: { exameple1: function() {
        if (a == 1) {
            console.log('true');
        }
    } },

    ifElse: { exameple2: function() {
            if (a == 1) {
                console.log('true');
            } else {
                console.log('false');
            }
        }
    },
    ifElseIf: { exameple3: function() {
            if (a == 1) {
                console.log('true');
            } else if (a == 2) {
                console.log('false');
            } else if (a == 3) {
                console.log('false');
            }  else {
                console.log('else');
            }
        }
    },
    switch: { exameple4: function() {
        switch (a) {
            case 1:
                console.log('true');
                break;
            case 2:
                console.log('false');
                break;
            case 3:
                console.log('false');
                break;
            default:
                console.log('else');
                break;
        }
    }},
    ternary: { exameple5: function() {
        a == 1 ? 
        console.log('true') :
        console.log('false');
    }}

};


function getValidPhoneNumber() {
    const phoneNumber = prompt('Enter your phone number');
    if (!pattern.test(phoneNumber)) {
        alert('That is not a valid phone number');
        return getValidPhoneNumber();
    } else {
        return phoneNumber;
    }
}

// getValidPhoneNumber();

function myFunction( param1, param2, param3 ) {
    console.log(param1, param2);
    console.log(param1 + param2);
    return param1 * param2;
}
                            // param1, param2, param3
const myValue = myFunction(      2,     3      , 4); 

const myObject = {
    myMethod: myFunction
}

console.log('myValue', myObject.myMethod(4, 6));


function double(param) {
    return param * 2;
}

function add(param1, param2) {
    return param1 + param2;
}

function area (length, width, height) {
    return length * width * height;
}
const myButton = document.querySelector('button');

if (myButton) {
    myButton.addEventListener('click', (self) => {
        console.log('button clicked');
    });
}

// callbacks
function whenSomeoneClicksAnywhere() {
    console.log('someone clicked');
}
document.addEventListener('click', whenSomeoneClicksAnywhere);

// promises
fetch('https://api.github.com/users/vinferno')
.then(response => { return response.json() })
.then((data) => {  console.log(data)});
