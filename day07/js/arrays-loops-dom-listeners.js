let userAnswers = [];
let compAnswers = [];

const colors = ['red', 'blue', 'yellow', 'green'];//  array of colors

const div = createGameBoard();


colors.forEach((color) => { // loop
    console.log(color);
    createColorBox(color);
});

createStartButton();





function createGameBoard() {
    const div = document.createElement('div'); // create a div element for the dom
    document.body.appendChild(div); // append the div to the body of the document
    div.classList.add('game-board');
    return div;
}
function checkIfCorrect() {
    console.log(userAnswers.join(''), compAnswers.join(''));
    if (userAnswers.join('') === compAnswers.join('')) {
        // alert('You got it right lets add more!');
        pickRandomColor();
    } else {
        if (compAnswers.join('').startsWith(userAnswers.join(''))) {
            console.log('your doing great');
        } else {
            alert('You got it wrong. try again!');
            alert(`Your score is ${compAnswers.length -1}`);
            userAnswers = [];
            compAnswers = [];
        }
    }
}


function lightUpBox(color) {
    const box = document.querySelector(`.${color}`); // querySelector to get the box with the color
    box.classList.add('active'); // add the active class to the box
    setTimeout(() => {
        box.classList.remove('active'); // remove the active class from the box
    }, 500); // after 500ms
}


function playCompAnswers(index) {
    if (compAnswers[index]) {
        lightUpBox(compAnswers[index]);
        setTimeout(() => {
            playCompAnswers(index + 1);
        }, 1000);
    }
}

function createColorBox(color) {
    const box = document.createElement('div');
    box.classList.add('color-box');
    div.appendChild(box);
    box.classList.add(color);
    box.addEventListener('click', () => { // callback function
        userAnswers.push(color);
        lightUpBox(color);
        setTimeout(() => {
            checkIfCorrect();
        }, 1000);
    });
}

function pickRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length); // random index
    const color = colors[randomIndex]; // get the color at the random index
    compAnswers.push(color); // push the color to the compAnswers array
    userAnswers = [];
    playCompAnswers(0);
}

function createStartButton() {
    const startButton = document.createElement('button');
    startButton.innerText = 'Start';
    document.body.appendChild(startButton);
    
    startButton.addEventListener('click', () => {
        pickRandomColor();
        playCompAnswers(0);
    });
}