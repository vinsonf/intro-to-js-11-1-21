// reason to use functions (do stuff)
// * do stuff
// * reuse code
// * easy to read
// * use it later


// function declaration
function getRandomIntBetweenRange(min, max) { // 2 parameters
    return Math.floor(Math.random() * (max - min + 1)) + min; // return a value
}

// console.log(getRandomIntBetweenRange(1, 5));
// console.log(getRandomIntBetweenRange(11, 15));
// console.log(getRandomIntBetweenRange(10, 25));

// console.log(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
// console.log(Math.floor(Math.random() * (15 - 11 + 1)) + 11);
// console.log(Math.floor(Math.random() * (25 - 15 + 1)) + 15);

// callbacks
// function orderPizza(callback) {
//     console.log('Ordering pizza');

//    prepPizza(callback);
// }

// function prepPizza(callback) {
//     setTimeout(function() {
//         console.log('Pizza is done Prepping');
//         cookPizza(callback);
//     }, 5000);
// }

// function cookPizza(callback) {
//     setTimeout(function() {
//         console.log('Pizza is done cooking');
//         deliverPizza(callback);
//     }, 5000);
// }

// function deliverPizza(callback) {
//     setTimeout(function() {
//         console.log('Pizza is delivered');
//         callback();
//     }, 5000);
// }

// orderPizza(function() {
//     console.log('Eat pizza');
// });


const time = 2000;
// promises
const orderPizza = () =>  new Promise((resolve, reject) => {
    console.log('Ordering pizza');
    setTimeout(() => {
        getRandomIntBetweenRange(1,3) < 3 ?   resolve('pizza is ordered') : reject('No one answered');
    }, time);
});
const prepPizza = () => new Promise((resolve, reject) => {
    console.log('pizza is being prepped');
    setTimeout(() => {
        getRandomIntBetweenRange(1,3) < 3 ? resolve('pizza is prepped') : reject('pizza is dropped');
    }, time);
});
const cookPizza = () => new Promise((resolve, reject) => {
    console.log('pizza is being cooked');
    setTimeout(() => {
        getRandomIntBetweenRange(1,3) < 3 ? resolve('pizza is cooked') : reject('pizza is burnt');
    }, time);
});

const deliverPizza = () => new Promise((resolve, reject) => {
    console.log('pizza is being delivered');
    setTimeout(() => {
        getRandomIntBetweenRange(1,3) < 3 ? resolve('pizza is delivered') : reject('pizza guy fall asleep');
    }, time);
});

const eatPizza = () => new Promise((resolve, reject) => {
    console.log('pizza is eaten');
    setTimeout(() => {
        getRandomIntBetweenRange(1,3) < 3 ? resolve('pizza is eaten') : reject('pizza is dropped');
    }, time);
});

orderPizza()
.finally(() => {
    console.log('finally');
})
.then((data) => {
    console.log('orderPizza resolve to: ', data);
    return prepPizza();
}).then((data) => {
    console.log('prepPizza resolve to:', data);
    return cookPizza();
})
.then((data) => {
    console.log('cookPizza resolves to:', data);
    return deliverPizza();
}).then(data => {
    console.log('data', data);
    return eatPizza();
}).then(data => {
    console.log('eatPizza resolve to: ', data)
}).catch(err => {
    console.log('err', err, 'give refund');
}).finally(() => {
    console.log('finally');
})