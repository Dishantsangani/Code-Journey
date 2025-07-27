// Simple if-else Statement
let age = 25;
if (age > 18) {
  console.log("You can drive");
} else {
  console.log("You can't drive");
}

// Else-if Statement
let grade = "B";
if (grade === "A") {
  console.log("Excellent!");
} else if (grade === "B") {
  console.log("Well done");
} else if (grade === "C") {
  console.log("Good");
} else if (grade === "D") {
  console.log("You passed");
} else if (grade === "F") {
  console.log("Better try again");
} else {
  console.log("Invalid grade");
}

// Light & Dark Mode
let mode = "light";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

// Odd & Even
let num = 7;
if (num % 2 == 0) {
  console.log(num, "is Even");
} else {
  console.log(num, "is Odd");
}

// Switch Case
var dev = prompt("enter Your Name");
switch (1) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;
  case 5:
    console.log("five");
    break;

  default:
    console.log("Not One or Three");
}
