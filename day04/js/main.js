let user = {
    name: 'John',
    age: 15,
    hasParentPermission: true,
};


const button = document.querySelector('button');
const input = document.querySelector('input');


function registerName() {
    if (!input.value) {
        alert('Please enter a name');
        return;
    }
    user.name = input.value;
    input.value = '';
    alert('Thank you ' + user.name + '!');
}

// if ( condition ) { ... code ... }
if (user.age >= 18) {
    console.log(`${user.name}, welcome to the site`);
} 


//    (    true   )
// if ( condition ) { ... code ... } else { ... code ... }
if (user.age ) {
    console.log(`${user.name}, welcome to the site`);
} else { // runs if the condition is false
    console.log(`${user.name}, you are not allowed to enter`);
}

// if ( condition ) { ... code ... } else if ( condition ) { ... code ... } else { ... code ... }

if (user.age >= 18) {
    console.log(`${user.name}, welcome to the site`);
} else if (user.age >= 14 && !user.hasParentPermission) {
    console.log(`${user.name}, you are allowed to enter with parent permission`);
} 
else if (user.age >= 10) {
    console.log(`${user.name}, you are allowed to enter with a waiver because you don't have parent permission`);
}
else if (user.age >= 3) {
    console.log(`${user.name}, you are allowed because you are under 10 and can use a computer very well`);
}
else { // runs if all other conditions are false
  console.log(`${user.name}, you are not allowed to enter`);
}

if (user.hasParentPermission) {
    console.log('yes it runs')
} else {
    console.log('no it doesnt run')
}

switch (user.age) {
    case 18:
        console.log(`${user.name}, welcome to the site (switch)`);
        break;
    case 14:
        console.log('congrats on being 14 (switch)')
        break;
    default:
        console.log('default');
}


// ternary operator
// condition ? true : false
// short hand for if else
10 > 15 ? console.log('yes') : console.log('no');