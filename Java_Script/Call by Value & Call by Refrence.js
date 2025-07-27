// Call By Value & Callby Refrence With Array

// Call BY Value
let a = 10;
a = 20;
//  This a Is Call By Value
console.log(a);

// Array
const dev = [10, 20, 30, 40, 50, 60];
dev[2] = 27;
// This Array Of Index Two Is Calling Refrence Of Dev Array
console.log(dev);

// Call By Value & Callby Refrence With Object

const Person = {
  name: "Dishant",
  age: 23,
  hobbie: "F1 Racing",
};

Person.age = 22;
// That Age Is Calling By Refrence And Update The new Age
console.log(Person);
