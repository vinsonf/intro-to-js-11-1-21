// Variable Data Types: Primitive Data Types
//  - Number (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//  - String ('Hello', 'World', '!')
//  - Boolean (true, false)

// Variable Declaration:
//  - let name = value; // block scope
//  - const name = value; // block scope
//  - var name = value; // function scope

// Primitive Data Types:
var name = "John Doe";
const string = "OverView";
let number = 30;
let boolean = true;

console.log(name);

// Compound / Complex Data Types:

// organization/group of data types:
const object = {
  name: "John Doe",
  age: 30,
  email: "",
  hobbies: ["Sports", "Cooking"],
  address: {},
  greet: function () {},
  isValid: true,
};
const array = ["John", "Jane", "Mary", {}, function () {}];

// reasons to create variables:
//  - to store data *
// - remember the value of variables *
// - to avoid typos *
// - to make code more readable *
// - to avoid magic numbers *
// - to avoid duplication *
// - to avoid hard-coding *
// - to avoid scope issues

// a variable is like:
//  - a container
//  - a box that can hold data

// Javascript Syntax:
// does not care about white space
const myName1 = "John Doe";
// ends with a semicolon
const mySentence = "Hello World";
// case sensitive
const myname = "John Doe";
// camelCase
const myName = "John Doe";
// PascalCase
const MyName = "John Doe";
// snake_case
const my_name = "John Doe";
// kebab-case
/*
const my-name = 'John Doe'; // not recommended
*/

// this is a comment anything after the // is ignored

/*

everything in between the a slash and a star is a comment

*/
const notAComment = "Hello World";

// console
// - console.log(variable);
// - console.error(variable);
// - console.warn(variable);
// - console.info(variable);
// - console.debug(variable);

console.log(name);
console.error("this is bad");
console.warn("this is bad");
console.info("this is just information");
console.debug("this is just information");

// operators:
// types of operators:
//  - assignment
const a = 10;
//  - arithmetic
const b = a + 10;
//  - logical
const c = a > 10;
//  - comparison
const d = a === 10;
//  - bitwise
const e = a & 10;
//  - unary
const f = !c;
//  - ternary
const g = c ? "yes" : "no"; // logical ? true : false

// String methods:
//  - charAt()
"abc".charAt(0); // a
"abc"[0]; // a
//  - charCodeAt()
"abc".charCodeAt(0); // 97
String.fromCharCode(97); // a
//  - concat()
"abc".concat("def"); // abcdef
//  - indexOf()
"abc".indexOf("a"); // 0
"abc".indexOf("b"); // 1
//  - lastIndexOf()
"abcabc".lastIndexOf("c"); // 5
//  - localeCompare()
"abc".localeCompare("abc"); // 0
"abc" === "abc"; // true
//  - match()
"abc".match(/ab/); // ['ab']
//  - replace()
"abc".replace("a", "A"); // Abc
//  - search()
"abc".search(/bc/); // 1
//  - slice()
"abc".slice(1); // bc
"abcdef".slice(2, 5); // cde
//  - split()
"abc".split("b"); // ['a', 'c']
//  - substr()
"abc".substr(1); // bc
"abcdef".substr(2, 3); // cde
//  - substring()
"abcdef".substring(2, 5); // cde
//  - toLowerCase()
"ABC".toLowerCase(); // abc
//  - toUpperCase()
"abc".toUpperCase(); // ABC
//  - trim()
" ab c ".trim(); // "ab c"

/*
// popup methods
//  - alert()
alert('Hello World'); // displays a popup return undefined
//  - confirm()
confirm('Are you sure?'); // displays a popup with a yes/no button and returns true or false
//  - prompt()
prompt('What is your name?'); // displays a popup with a text input and returns the value if you choose ok else returns null
*/

// Math methods:
//  - abs()
Math.abs(-10); // 10
//  - acos()
Math.acos(0.5); // 1.0471975511965976
//  - asin()
Math.asin(0.5); // 0.5235987755982989
//  - atan()
Math.atan(0.5); // 0.4636476090008061
//  - atan2()
Math.atan2(0.5, 0.5); // 0.7853981633974483
//  - ceil()
Math.ceil(0.1); // 1
//  - cos()
Math.cos(0.5); // 0.87758256189
//  - exp()
Math.exp(0.5); // 2.718281828459045
//  - floor()
Math.floor(0.1); // 0
//  - log()
Math.log(10); // 2.302585092994046
//  - max()
Math.max(1, 2, 3, 4, 5); // 5
//  - min()
Math.min(1, 2, 3, 4, 5); // 1
//  - pow()
Math.pow(2, 3); // 8
//  - random()
Math.random(); // 0.5 (between 0 and 1) always a decimal
//  - round()
Math.round(0.1); // 0
//  - sin()
Math.sin(0.5); // 0.479425538604
//  - sqrt()
Math.sqrt(4); // 2
//  - tan()
Math.tan(0.5); // 0.54630248984

// Math properties:
//  - E
Math.E; // 2.718281828459045
//  - LN10
Math.LN10; // 2.302585092994046
//  - LN2
Math.LN2; // 0.6931471805599453
//  - LOG2E
Math.LOG2E; // 1.4426950408889634
//  - LOG10E
Math.LOG10E; // 0.4342944819032518
//  - PI
Math.PI; // 3.141592653589793
//  - SQRT1_2
Math.SQRT1_2; // 0.7071067811865476
//  - SQRT2
Math.SQRT2; // 1.4142135623730951

// Date methods:
//  - getDate()
new Date().getDate(); // returns the day of the month (1-31)
//  - getDay()
new Date().getDay(); // returns the day of the week (0-6)
//  - getFullYear()
new Date().getFullYear(); // returns the year (4 digits)
//  - getHours()
new Date().getHours(); // returns the hour (0-23)
//  - getMilliseconds()
new Date().getMilliseconds(); // returns the milliseconds (0-999)
//  - getMinutes()
new Date().getMinutes(); // returns the minutes (0-59)
//  - getMonth()
new Date().getMonth(); // returns the month (0-11)
//  - getSeconds()
new Date().getSeconds(); // returns the seconds (0-59)
//  - getTime()
new Date().getTime(); // returns the time in milliseconds since January 1, 1970, 00:00:00 UTC
//  - getTimezoneOffset()
new Date().getTimezoneOffset(); // returns the timezone offset in minutes (e.g. -480 for Pacific Daylight Time)
//  - getUTCDate()
new Date().getUTCDate(); // returns the day of the month (1-31)
//  - getUTCDay()
new Date().getUTCDay(); // returns the day of the week (0-6)
//  - getUTCFullYear()
new Date().getUTCFullYear(); // returns the year    (4 digits)
//  - getUTCHours()
new Date().getUTCHours(); // returns the hour (0-23)
//  - getUTCMilliseconds()
new Date().getUTCMilliseconds(); // returns the milliseconds    (0-999)
//  - getUTCMinutes()
new Date().getUTCMinutes(); // returns the minutes
//  - getUTCMonth()
new Date().getUTCMonth(); // returns the month
//  - getUTCSeconds()
new Date().getUTCSeconds(); // returns the seconds
//  - getYear()
new Date().getYear(); // returns the year (as a two-digit number, so 90 for 1990)
//  - parse()
Date.parse("2012-01-01"); // returns the time in milliseconds since January 1, 1970, 00:00:00 UTC
//  - setDate()
new Date().setDate(1); // sets the day of the month (1-31)
//  - setFullYear()
new Date().setFullYear(2012); // sets the year (4 digits)
//  - setHours()
new Date().setHours(1); // sets the hour (0-23)
//  - setMilliseconds()
new Date().setMilliseconds(1); // sets the milliseconds (0-999)
//  - setMinutes()
new Date().setMinutes(1); // sets the minutes
//  - setMonth()
new Date().setMonth(1); // sets the month
//  - setSeconds()
new Date().setSeconds(1); // sets the seconds
//  - setTime()
new Date().setTime(1); // sets the time in milliseconds since January 1, 1970, 00:00:00 UTC
//  - setUTCDate()
new Date().setUTCDate(1); // sets the day of the month (1-31)
//  - setUTCFullYear()
new Date().setUTCFullYear(2012); // sets the year (4 digits)
//  - setUTCHours()
new Date().setUTCHours(1); // sets the hour (0-23)
//  - setUTCMilliseconds()
new Date().setUTCMilliseconds(1); // sets the milliseconds (0-999)
//  - setUTCMinutes()
new Date().setUTCMinutes(1); // sets the minutes
//  - setUTCMonth()
new Date().setUTCMonth(1); // sets the month
//  - setUTCSeconds()
new Date().setUTCSeconds(1); // sets the seconds
//  - setYear()
new Date().setYear(2012); // sets the year (as a two-digit number, so 90 for 1990)
//  - toDateString()
new Date().toDateString(); // returns the date as a string (e.g. "Mon Dec 31 1969")
//  - toGMTString()
new Date().toGMTString(); // returns the date as a string (e.g. "Mon Dec 31 1969")
//  - toISOString()
new Date().toISOString(); // returns the date as a string (e.g. "2012-12-31T23:59:59.999Z")
//  - toJSON()
new Date().toJSON(); // returns the date as a string (e.g. "2012-12-31T23:59:59.999Z")
//  - toLocaleDateString()
new Date().toLocaleDateString(); // returns the date as a string (e.g. "12/31/2012")
//  - toLocaleString()
new Date().toLocaleString(); // returns the date as a string (e.g. "12/31/2012")
//  - toLocaleTimeString()
new Date().toLocaleTimeString(); // returns the date as a string (e.g. "12/31/2012")
//  - toString()
new Date().toString(); // returns the date as a string (e.g. "Mon Dec 31 1969")
//  - toTimeString()
new Date().toTimeString(); // returns the date as a string (e.g. "Mon Dec 31 1969")
//  - toUTCString()
new Date().toUTCString(); // returns the date as a string (e.g. "Mon Dec 31 1969")

// getters and setters:
const myUser = {
  firstName: "Johnny",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

myUser.fullName = "John Smith";

console.log(myUser.fullName, myUser); // John Doe

const friends = [
  { name: "John", age: 30 },
  { name: "Jane", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 25 },
  { name: "Tom", age: 40 },
];

friends.forEach((friend, i) => {
  console.log(friend.name);
  const li = document.createElement("li");
//   li.innerHTML = friend.name + " is " + friend.age + " years old.";
  li.innerHTML = `${i + 1}: ${friend.name} is (${friend.age}) years old`;
  document.body.appendChild(li);
});

friends.sort((a, b) => a.age - b.age);
console.log(friends.map((friend) => friend.name));
