// Fillter = creates a new array filled with elements that pass a test provided by a function.
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newnums = nums.filter((num) => num > 5);
// console.log(newnums);

// Ex.
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 2003, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userbooks = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "History";
});
console.log("userbooks: ", userbooks);

// 
// async function dev() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const jsdata = await response.json();
//     // console.log("This is API Data", jsdata);
//     return jsdata; // Return the fetched data
//   } catch (err) {
//     console.log(err);
//   }
// }

// dev().then((data) => {
//   // Filter the data based on a condition
//   let newdata = data.filter((product) => product.title.length < 50);
//   console.log("Filtered newdata: ", newdata);
// });

// New Array
let arr = [10, 20, 6, 8, 2, 7, 3, 1];
let sum = arr.filter((num) => num > 5);
console.log(" sum: ", sum);
