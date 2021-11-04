const button = document.querySelector('button');

button.addEventListener('mouseenter', function() {
    button.innerText = 'Changed';
    document.body.style.backgroundColor = 'red';
});