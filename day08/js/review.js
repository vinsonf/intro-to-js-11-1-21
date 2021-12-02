// let array = [];
// console.log('start with empty array');
// console.log(array);
// // array push method adds to array
// array.push('a');
// console.log('add to array: ');
// console.log(array);
// array.push('b', 'x', 'y', 'z');
// console.log('add multiple to array: ');
// array.push('c', 'd');
// console.log('add multiple to array: ');
// console.log(array);



// array.pop(); // removes last element
// console.log('remove last element: ');
// console.log(array);


// array.unshift('_', '-'); // adds to beginning of array
// console.log('add to beginning of array: ');
// console.log(array);


// array.shift(); // removes first element
// console.log('remove first element: ');
// console.log(array);

// array.splice(3, 1); // removes element at index 3
// console.log('remove element at index 3: ');
// console.log(array);

// array.splice(3, 2); // removes element at index 3
// console.log('remove element at index 3 and an extra: ');
// console.log(array);

// array.splice(2, 0, )
// console.log('splice at index 2 and remove 0 elements');
// console.log(array);


// array.splice(2, 0, 1, 2, 3, 0, undefined, null, 0, NaN, '');
// console.log('splice at index 2 and remove 0 elements');
// console.log(array);

// // all array methods
// array.concat(['x', 'y', 'z']); // concatenates arrays non destructively
// console.log('concat: ');
// console.log(array);

// array.concat(['x', 'y', 'z']); // concatenates arrays non destructively
// console.log('concat: ');
// console.log(array.concat(['x', 'y', 'z']));



// array = array.concat(['x', 'y', 'z']); // concatenates arrays destructively

// array.length; // returns length of array
// console.log('length: ');
// console.log(array.length);

// const isEvery = array.every((item) => {
//     return !!item;
// }); // returns true if all elements pass test

// console.log('isEvery', isEvery);

// const isSome = array.some((item) => {
//     return !!item;
// }); // returns true if all elements pass test

// console.log('areSome', isSome);

// const found = array.find((item) => {
//     return item === 'z';
// }); // returns first element that passes test

// console.log('found', found);

// const filteredArray = array.filter((item) => {
//     return !!item;
// }) // returns new array with elements that pass test

// console.log('filtered:', filteredArray);

// const foundIndex = array.findIndex((item) => {
//     return item === 'z';
// }); // returns index of first element that passes test

// console.log('foundIndex', foundIndex);

// const included = array.includes('m'); // returns true if array contains element

// console.log('included', included);

// array.reverse(); // reverses array
// console.log('reverse: ', array);
// array.reverse(); // reverses array
// console.log('reverse: ', array);

// array.sort()
// console.log('sort: ', array);

// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.sort((a, b) => { 
//     return b - a;
// }) // sort by value

// console.log(array)

// const mapped = array.map(item => {
//     return {value: item * 2};
// });

// console.log('mapped', mapped);

// const reduced = array.reduce( (acc, item) => {
//     return acc + item;
// }, 0); // returns sum of array

// console.log('reduced', reduced);

// const sliced =array.slice(4, 8); // returns new array with elements from index 4 to index 8
// console.log('sliced', sliced);


// array.forEach(item => {
//     // console.log(item);
// });

// // types of loops
// for(let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// let x = 1;
// while(x < .5){
//     console.log('x is still less than 10', x);
//     x++;

//     x = Math.random();
// }

// x = 100;
// do {
//     x++;
//     console.log('x is still less than .50', x);


//     x = Math.random();
// } while(x < .5);



// for(let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// x = 0;
// while(x < array.length) {
//     console.log(array[x]);
//     x++;
// }

console.dir(document);

const li = document.querySelector('li');

document.querySelectorAll('li')[0].style.color = 'green';
li.style.fontSize = '40px';
li.innerText = 'green';

let score = 0;

// document.addEventListener('scroll', () => {
//     console.log('scrolling');
// })

for (let i = 0; i < 1000; i++) {
    let score = 0;
    const li = document.createElement('li');
    li.innerText = i;
    document.body.appendChild(li);
    li.style.overflowY = 'scroll';
    li.draggable = true;

    li.addEventListener('dragstart', function() {
        console.log('clicked', this);
        this.style.color = 'red';
        this.innerText = 'red';
        score++;
        this.innerText = score;
    });
}