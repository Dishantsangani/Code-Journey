const heros = ["Thor", "Ironman", "Spiderman"];
const dc = ["Superman", "Flash", "Batman"];
// This concat Is Join The Two Array But that Hold The One Variable
// let a = heros.concat(dc);
// console.log("heros: ", a);

// Other Way To Merge The Two Array
// let b = [...heros, ...dc];
// console.log(b);

// Merge Array With Arrays
// Flat Is A Merge All Sub Array In One Single Array
// const newarr = [1, 2, [3, 7, 0], [27, 29], 0, 1, [58]];
// const merge = newarr.flat(Infinity);
// console.log(merge);

// Array Other Methods
// console.log(Array.isArray("Dishant"));
// console.log(Array.from("Dishant"));

// This OF Keyword is merge all Variable To stored In Array
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));
