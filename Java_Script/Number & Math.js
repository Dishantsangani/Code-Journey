const score = 400;

console.log(score.toString().length);
console.log(score.toFixed(2));

// Other
const Other = 23.515515;
console.log(Other.toPrecision(2));

// LocaleString
const local = 10000000;
console.log(local.toLocaleString());
//============ Math ==============
const math = 500;
// console.log(math.abs(4));
// console.log(math.ceil(4.2));
// console.log(math.floor(4.9));
// console.log(math.min(4, 3, 6, 8));
// console.log(math.random() * 10 + 1);

// OTP Like
const min = 10;
const max = 20;
console.log(math.floor(math.random() * (max - min + 1) + min));
