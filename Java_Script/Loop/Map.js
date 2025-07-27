// Creates a new array from calling a function for every array element.
const map = new Map();
map.set("IN", "India");
map.set("USA", "United State Of America");
map.set("FR", "France");
map.set("UAE", "United Arab Emirates");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// Ex.
const myObject = {
  Game1: "NFS",
  Game2: "Spiderman",
};

for (const [key, value] of myObject) {
  console.log(key);
}
