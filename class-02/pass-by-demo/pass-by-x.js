'use strict';

// Pass-by-value


let greeting = 'hello world';

let greetingCopy = greeting;

console.log('greeting before - ', greeting);
console.log('greetingCopy - ', greetingCopy);

greeting = 'goodbye moon';

console.log('greeting after - ', greeting);
console.log('greetingCopy after - ', greetingCopy);


// Pass-by-reference

let cat = {
  name: 'millie',
  isAsleep: true
}

let catCopy = cat;

console.log('cat -- ', cat);
console.log('catCopy --', catCopy);

cat.isAsleep = false;

console.log('cat after poke -- ', cat);
console.log('catCopy after poke -- ', catCopy);
