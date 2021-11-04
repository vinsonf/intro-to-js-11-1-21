// pull html elements into javascript
const myInput = document.querySelector('#my-id');
console.log(myInput);
const myButton = document.querySelectorAll('.my-button')[0];
console.log(myButton);
const myOl = document.querySelector('ol');
console.log(myOl);

// get value of input
console.log(myInput.value);

// add event listener to button
myButton.addEventListener('dblclick', function() { 
    // const li = document.createElement('li');
    // li.innerHTML = myInput.value;
    // myOl.append(li);

    myOl.innerHTML += `<li>${myInput.value}</li>`;
 });
