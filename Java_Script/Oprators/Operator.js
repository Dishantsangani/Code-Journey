// Arithmetic Operators
let a = 5;
let b = 6;
console.log("a + b =", a + b); // increment operator
console.log("a - b =", a - b); // decrement operator
console.log("a * b =", a * b); // multiplication operator
console.log("a / b =", a / b); // division operator
console.log("a % b =", a % b); // modulus operator
console.log("a ** b =", a ** b); // exponentiation operator

//Unary Operators
let c = 5;
console.log("++c =", ++c); // increment operator
console.log("--c =", --c); // decrement operator
console.log("c++ =", c++); // increment operator
console.log("c-- =", c--); // decrement operator

// Assignment Operators
let d = 5;
let e = 2;

d += e; // d = d + e
console.log("d =", d); //increment operator
d -= 4; // d = d - e
console.log("d =", d); //decrement operator
d *= 4; // d = d * e
console.log("d =", d); //multiplication operator
d /= 4; // d = d / e
console.log("d =", d); //division operator
d %= 4; // d = d % e
console.log("d =", d); //modulus operator
d **= 4; // d = d ** 4
console.log("d =", d); //exponentiation operator

// Comparison operators
let f = 5;
let g = 2;
console.log("5 == 2", f == g); // equal to operator
console.log("5 != 2", f != g); // not equal to operator
console.log("5 === 2", f === g); // equal to operator
console.log("5 !== 2", f !== g); // not equal to operator
console.log("5 > 2", f > g); // greater than operator
console.log("5 < 2", f < g); // less than operator
console.log("5 >= 2", f >= g); // greater than or equal to operator
console.log("5 <= 2", f <= g); // less than or equal to operator

// Logical operators
let h = 5;
let i = 2;

console.log("(cond1 && cond2)", h < i && h === 5); // logical and operator
// two values are check and then execute
console.log("(cond1 || cond2)", h < i || h === 5); // logical or operator
// one value check and then execute
console.log("!(6<5)", !(h < i)); // logical not operator

// Ternary Operator
let age = 20;
console.log(age > 18 ? "you are vote" : "you are not vote");
