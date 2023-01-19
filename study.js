"use strict";

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);
//   }
// }


// let result = '';
// const length = 117;

// for (let i = 1; i < length; i++) {

//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }

//   result += '\n';
// }

// console.log(result);

// first:  for (let i = 0; i < 3; i++) {
//   console.log(`First level: ${i}`);
//   for (let j = 0; j < 3; j++) {
//     console.log(`Second level: ${j}`);
//     for (let k = 0; k < 5; k++) {
//       if (k === 2) break first;
//      console.log(`Third level: ${k}`);
//     }
//   }
// }


////////////////////////////////////Function

// function showFirstMessage(text) {
//   console.log(text);
//   let num = 20;
// }

// showFirstMessage("Hello World!");

// const calc = (a, b) => a + b ;


// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert (amount, curr) {
//   return curr * amount;
// }

// function promotion(result) {
//   console.log(result * discount);
// }

// promotion(convert(500, usdCurr));
// promotion(convert(500, eurCurr));


// function test() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (i === 3) return
//   }
//   console.log('done');
// }

// test();

// function doNothing() {}
// console.log(doNothing() === undefined);

// ///////////////////////////////////////

const str = 'test';

console.log(str.toUpperCase());
console.log(str);

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

const logg = "Hello world";

console.log(logg.slice(-7, -1));

console.log(logg.substr(6, 5));

const num = 12.4999;
console.log(Math.round(num));

const test = "12.2px";
// console.log(parseInt(test));
console.log(parseFloat(test));