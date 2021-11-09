// Assign STRING VALUES ONLY to all of the following variables.
// Assign an adjective
let adj1 = "fancy";
// Assign an adjective
let adj2 = 'strong';
// Assign an adjective
let adj3 = 'tall';
// Assign an adjective
let adj4 = 'mysterious';
// Assign an adjective
let adj5 = 'greedy';
// Assign an adjective
let adj6 = 'itchy';
// Assign an adverb
let adverb = 'flossy';
// Assign a color
let color = 'red';
// Assign a noun
let noun1 = 'sun';
// Assign a noun
let noun2 = 'art';
// Assign a noun
let noun3 = 'flower';
// Assign a noun
let noun4 = 'umbrella';
// Assign a noun
let noun5 = 'animal';
// Assign a noun
let noun6 = 'house';
// Assign a number
let num = '85';
// Assign a plural noun
let pnoun1 = 'people';

// Open your console to see the results!
// SPOILER ALERT: KEEP SCROLLING TO VIEW THE REST OF THE CODE


































//Using template literals to plug in the values
let story = `It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.`;

//Console log the completed story
document.body.innerHTML = `<h1>${story}</h1>`;
const p = document.createElement('h1');
document.body.appendChild(p);

const h1 = document.querySelectorAll('h1');
console.log(h1);
h1[1].innerHTML = 'Hello world';