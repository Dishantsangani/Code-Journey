// Array
// An array is a special variable, which can hold more than one values in a single variable.
// let marks = [20, 27, 30, 40, 50];
// marks[2] = 66;
// console.log(marks);

// console.log(marks.length); //Property

// 2D Array
// let arr = [["dishant","sangani"],["apna","collage"],["Dishant","Sangani"]];

// let heros = ["ironman", "thor", "spiderman", "hulk", "captain america"];
// console.log(heros[1]);

// Looping over an array
// let heros = ["ironman", "thor", "spiderman", "hulk", "captain america"];
// for (let i = 1; i < heros.length; i++) {
//   console.log(heros[i]);
// }

// for of
// let cities = ["delhi", "mumbai", "chennai", "kolkata"];
// for (let city of cities) {
//   console.log(city.toLocaleUpperCase());
// }

// To string
// let foods = ["Poteto", "Apple", "Banana", "Orange", "chips", "sweets", "cake"];
// console.log(foods);
// console.log(foods.toString());

//Concat
// let hero = [" ironman", "thor", "spiderman", "hulk", "captain america"];
// let dc = [" batman", "superman", "wonderwoman", "aquaman"];
// let indian = ["dhoni", "kohli", "rohit", "raina", "ganguly"];
// let hero2 = hero.concat(dc, indian);
// console.log(hero2);

// All Array Method's
var a = ["a", "b", "c", "d", "e", "f", "deep", "dev"];
document.write("Original array: " + a + "<br/>");

// Slice
var slicedArray = a.slice(1, 6);
document.write("After slice(1, 6): " + slicedArray + "<br/>");

// Splice (Add)
a.splice(1, 0, "zz", "zzz");
document.write("After splice to add ('zz', 'zzz') at index 1: " + a + "<br/>");

// Splice (Remove)
a.splice(3, 1); // remove element at index 3
document.write("After splice to remove element at index 3: " + a + "<br/>");

// isArray check
if (Array.isArray(a)) {
  document.write("Is 'a' an array? : " + true + "<br/>");
}

// indexOf
var index = a.indexOf("deep");
document.write("Index of 'deep': " + index + "<br/>");

// lastIndexOf
var lastIndex = a.lastIndexOf("deep");
document.write("Last index of 'deep': " + lastIndex + "<br/>");

// includes
var includesC = a.includes("c");
document.write("Does array include 'c'? : " + includesC + "<br/>");

// Push
a.push("newElement");
document.write("After push('newElement'): " + a + "<br/>");

// Pop
var poppedElement = a.pop();
document.write(
  "After pop(): Popped element: " + poppedElement + ", Array: " + a + "<br/>"
);

// Unshift
a.unshift("start");
document.write("After unshift('start'): " + a + "<br/>");

// Shift
var shiftedElement = a.shift();
document.write(
  "After shift(): Shifted element: " +
    shiftedElement +
    ", Array: " +
    a +
    "<br/>"
);

// Join
var joinedArray = a.join(", ");
document.write("After join(', '): " + joinedArray + "<br/>");

// Reverse
a.reverse();
document.write("After reverse(): " + a + "<br/>");

// Sort
a.sort();
document.write("After sort(): " + a + "<br/>");
