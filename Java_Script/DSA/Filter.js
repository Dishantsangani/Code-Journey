// let arr = [6, 64, 8, 18, 1, 84, 35, 94];
// let newarr = arr.filter((num) => num < 18);
// console.log(newarr);

// With String
// let str = ["Dishant", "Sangani", "dev", "Nikol"];
// let newstr = str.filter((fstr) => fstr.length > 5);
// console.log(newstr);

//// async function dev() {
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
