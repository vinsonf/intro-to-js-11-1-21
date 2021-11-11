const img = document.createElement('img');
document.body.appendChild(img);
img.src = 'https://mir-s3-cdn-cf.behance.net/projects/max_808/cd9ece62880791.Y3JvcCwyMzE0LDE4MTAsODAsMA.png';
img.width = 100;
img.style.position = 'absolute';

// move the mole
function move() {
    img.style.left = getRandomInt() + 'px';
    img.style.top = getRandomInt() + 'px';
};
function getRandomInt() {
    return Math.floor(Math.random() * 800)
}
setInterval(move, 1000);
setTimeout( function() {
    alert('score:' + score);
    score = 0;
} , 10000);

let score = 0;

img.addEventListener('click', function () {
    score += 1;
    console.log(score);
    move();
});


const mole = document.querySelector('img');
console.log(mole.style.border = '1px solid red');