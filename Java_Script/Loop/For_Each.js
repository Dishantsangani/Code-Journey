// const code = ["js", "rb", "py", "Java", "cpp"];

// code.forEach((item) => {
//   console.log(item);
// });

// function print(item, index, arr) {
//   console.log(item, index, arr);
// }
// code.forEach(print);

// Ex.
// const mycode = [
//   { langname: "JavaScript", lfilename: "JS" },
//   { langname: "Java", lfilename: "Java" },
//   { langname: "py", lfilename: "python" },
// ];
// mycode.forEach((item) => {
//   console.log(item.lfilename);
// });

// Ex.
const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums = [];
mynums.forEach((num) => {
  if (num > 4) {
    newnums.push(num);
  }
});
console.log(newnums);
