// const object = {
//     key: 'value',
//     key2: 2,
//     key3: true,
//     key4: {},
//     key5: [1, 2, 3],
// };

// const person = {
//     name: 'John',
//     age: 30,
//     isMarried: false,
//     ['key' + '2']: 'value2',
// }


// console.log(person, object);



// const liObject = {
//     element: null,
//     score: 0,
//     createElement() {
//         this.element = document.createElement('li');
//         document.body.appendChild(this.element);
//         this.element.innerHTML = this.score;
//         this.element.addEventListener('click', () => {
//             console.log(this);
//             this.updateScore();
//         });
//     },
//     updateScore() {
//         this.score += 1;
//         this.element.innerHTML = this.score;
//         if (this.score > 10) {
//             this.element.style.color = 'red';
//             this.element.remove();
//         }
//     }
// }

// const liObject2 = {
//     element: null,
//     score: 0,
//     createElement() {
//         this.element = document.createElement('li');
//         document.body.appendChild(this.element);
//         this.element.innerHTML = this.score;
//         this.element.addEventListener('click', () => {
//             console.log(this);
//             this.updateScore();
//         });
//     },
//     updateScore() {
//         this.score += 1;
//         this.element.innerHTML = this.score;
//         if (this.score > 10) {
//             this.element.style.color = 'red';
//             this.element.remove();
//         }
//     }
// }

// liObject.createElement();
// liObject2.createElement();


// function createMyLi() {
//     const myLi = document.createElement('li');
//     myLi.innerHTML = 'Hello!';
//     document.body.appendChild(myLi);
// }

// createMyLi();
// createMyLi();
// createMyLi();


// class MyLi {
//     element = null;
//     score = 0;
//     createElement() {
//         this.element = document.createElement('li');
//         document.body.appendChild(this.element);
//         this.element.innerHTML = this.score;
//         this.element.addEventListener('click', () => {
//             console.log(this);
//             this.updateScore();
//             console.dir(this.element);
//         });
//     }
//     updateScore() {
//         this.score += 100;
//         this.element.innerHTML = this.score;
//         if (this.score > 1000) {
//             this.element.style.color = 'red';
//             this.element.remove();
//         }
//     }
// }

// const li1 = new MyLi();
// const li2 = new MyLi();
// const li3 = new MyLi();

// li1.createElement();
// li2.createElement();
// li3.createElement();
// console.log('object', liObject, liObject2)
// console.log(li1, li2, li3);
  

class Player {
    element = document.createElement('img');
    constructor() {
        this.element.src = 'https://pngimg.com/uploads/pacman/pacman_PNG16.png';
        this.element.style.position = 'absolute';
        document.body.appendChild(this.element);
        this.element.style.width = '100px';
    }
}

class Enemy {
    element = document.createElement('img');
    x = 500;
    y = 0;

    left = true;
    right = false;
    up = false;
    down = false;
    bound = 600;


    constructor() {
        this.element.src = 'https://www.gran-turismo.com/gtsport/decal/5044119548081505792_1.png';
        this.element.style.position = 'absolute';
        document.body.appendChild(this.element);
        this.element.style.width = '100px';
        this.setStyles();
    }

    setStyles() {
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }

    move() {
        if (this.left) {
            this.x -= 2;
            if (this.x < 0) {
                this.x = 0;
            }
        }
        if (this.right) {
            this.x += 2;
            if (this.x > this.bound) {
                this.x = this.bound;
            }
        }
        if (this.up) {
            this.y -= 2;
            if (this.y < 0) {
                this.y = 0;
            }
        }
        if (this.down) {
            this.y += 2;
            if (this.y > this.bound) {
                this.y = this.bound;
            }
        }
    }

    changeDirection() {
        const directions = ['left', 'right', 'up', 'down'];

        const randomIndex = Math.floor(Math.random() * directions.length);
        const randomDirection = directions[randomIndex];

        switch (randomDirection) {
            case 'left':
                this.left = true;
                this.right = false;
                this.up = false;
                this.down = false;
                break;
            case 'right':
                this.left = false;
                this.right = true;
                this.up = false;
                this.down = false;
                break;
            case 'up':
                this.left = false;
                this.right = false;
                this.up = true;
                this.down = false;
                break;
            case 'down':
                this.left = false;
                this.right = false;
                this.up = false;
                this.down = true;
                break;
        }
    }



}

const enemies = [new Enemy(), new Enemy()];

setInterval(() => {
    const enemie = new Enemy();
    enemies.push(enemie);
}, 10000)

console.log(new Player(), );

function gameLoop() {


    enemies.forEach(enemy => {
        enemy.move();
        enemy.setStyles();

        if (Math.random() > 0.98) {
            enemy.changeDirection();
        }
    });

    requestAnimationFrame(gameLoop);
}

gameLoop();