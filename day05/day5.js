
//FUNCTIONS
//Function — a set of instructions that perform a task.
////Let’s also consider a function that receives inputs and returns outputs:
// Named aka Function Declaration-------------

//A method, like a function, is a set of instructions that perform a task. The difference is that a method is associated with an object, while a function is not. Let’s explore some of JavaScript’s built-in methods.

console.log(brag(3)); // Can be called before because this function gets saved in memory

function brag(count) {
    return("I can do " + count + " pushups");
} 

(brag(3)); // I can do 3 pushups

//Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

//Function Expression-------ANONYMOUS------------------------
const brag = function(count) {
    return("I can do " + count + " pushups");
} 

brag(3) // I can do 3 pushups


//Arrow Function--------------------------------------
const brag = (count) => {
    return("I can do " + count + " pushups")
};

brag(3) // I can do 3 pushups

console.log(function(count) {
    return("I can do " + count + " pushups");
} (3)) // I can do 3 pushup


//PARAMETERS

function addNums(num1, num2) {
    console.log(num1 + num2);
};

//You need to call the function
addNums(5,4); //what happens if you dont put anything inside? NAN

function addNums(num1 = 1, num2 = 5) {
    console.log(num1 + num2);
};

addNums();
//you can still pass numbers to overrride the default params

//now normally you would return inside the function

function addNums(num1 = 1, num2 = 5) {
    return num1 + num2;
};

addNums();
//wanna seee it in console?
console.log(addNums(5,5));


//ARROW FUNCTIONS - ES6 or 2015 Arrow functions were introduced


const addNums = (num1 = 1, num2 = 5) => {
    return num1 + num2;
};
console.log(addNums());

// Other way to write (if you want paranthesis inside, you need the "return" keyword) (writing return with no brackets will give error)

const addNums = num1 => num1 + 10;
console.log(addNums(5));

const addNums = (num1 = 1, num2 = 5) => num1 + num2;
console.log(addNums());




//DAILY CHAllENGE
function isEven(number) {
	if (number%2 == 0)
		return true;
	else
		return false;
}

alert(isEven(5));


//METHODS VS FUNCTIONS
//Function — a set of instructions that perform a task.
//Method — a set of instructions that are associated with an object.

FUNCTIONS

function welcomeMessage() {
    console.log('Welcome to JavaScript');
  }
  // Call the function
  welcomeMessage();

//Let’s also consider a function that receives inputs and returns outputs:
  function concatName(firstName, middleName, lastName) {
    return firstName + ' ' + middleName + ' ' + lastName;
  }

  const fullName =concatName('jorge', 'luis', 'villalobos');
  console.log(fullName);

//METHODS

//A method, like a function, is a set of instructions that perform a task. The difference is that a method is associated with an object, while a function is not. Let’s explore some of JavaScript’s built-in methods.

const todos = [
    {
        id: 1,
        text: 'Do the dishes',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Take the trash out',
        isCompleted: false
    },
    {
        id: 3,
        text: 'Clean the room',
        isCompleted: true
    }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
//----------------------------------------------

for ( let i=0; i < todos.length; i++) {
    console.log(todos[i].text);
};
//-----------------------------------------

for(let todo of todos) {
    console.log(todo.text)
}
//-----------------------------------------

todos.forEach(tasks => console.log(tasks.text));
//-------------------------------------------

const todoText = todos.map(function(todo) {
    return todo.text;
    });

console.log(todoText);
//------------------------------------------

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

const todoCompleted = todos.filter(function(tasks) {
    return tasks.isCompleted === true;
}).map(function(tasks) {
    return tasks.text;
})
console.log(todoCompleted);



//Globals VS Local Scope
let x = 5; // global

function someThing(y) {
  const z = x + 5;
  console.log(z);
}

function someThing(y) {
  x = 8; // still global!
  const z = x + 5;
  console.log(z);
}


function someThing(y) {
  const x = 5; // local
  let z = x + 6;
  console.log(z);
}

someThing();

let x = 10;

console.log(x)