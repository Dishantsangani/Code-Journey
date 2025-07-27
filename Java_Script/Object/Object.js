// Singleton
// Object.create

// Object Literals
// const User = {
//   name: "Dishant",
//   age: 22,
//   location: "Nikol",
//   email: "Dishant@gmail.com",
//   idloggedin: false,
//   lastlogin: ["Monday", "Sunday"],
// };

// console.log(User["lastlogin"][0]);

// Object With New Symbols
const city = Symbol("key1");

const person = {
  name: "Dishant",
  age: 22,
  email: "Dishant@gmail.com",
  local: "Nikol",
  [city]: "Ahmedabad",
};
person.email = "devsangani@gmail.com";
console.log(person);

// That Freeze Method That Freeze And Not Exicution Of Other Part

// Object.freeze(person);
// person.email = "sangani@gmail.com";
// console.log(person);

// console.log(person[city]);

// Object With Functions
person.gret = function () {
  console.log("Hello Js User");
};
person.greet = function () {
  console.log(`Hello Everyone ${this.name}`);
};
console.log(person.greet());

// Ex.
let dev = {};
if (Object.keys(dev).length === 0) {
  console.log("Empty");
}

// Destracuring
const cource = {
  name: "js hindi",
  price: 999,
  instructor: "Hitesh",
};

const { instructor } = cource;
console.log(instructor);
