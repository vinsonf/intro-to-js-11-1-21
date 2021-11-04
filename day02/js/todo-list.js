const myInput = document.querySelector('#my-id');
const myButton = document.querySelectorAll('.my-button')[0];
const myOl = document.querySelector('ol');
myButton.addEventListener('dblclick', function() { 
    myOl.innerHTML += `<li>${myInput.value}</li>`;
 });
