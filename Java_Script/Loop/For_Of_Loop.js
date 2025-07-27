// For Of
// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = "Hello Dishant!";

for (const greet of greetings) {
  if (greet === " ") {
    console.log("Space is Detected");
  }
  console.log(`Each Char is ${greet}`);
}
