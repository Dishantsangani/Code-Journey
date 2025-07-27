let arr = [6, 64, 8, 18, 1, 84, 35, 94];

function dev(arr) {
  let reversed = [];
  for (let i = arr.length; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
let newrevr = dev(arr);
console.log("newrevr: ", newrevr);

// Short Method
let arr2 = [6, 64, 8, 18, 1, 84, 35, 94];
arr2.reverse();
console.log("New Method", arr2);

// Other Way
// let arr = [1, 20, 5, 6, 3, 6, 78, 27];
// for (let i = arr.length; i >= 0; i--) {
//   let sum;
//   sum = arr[i];
//   console.log(sum);
// }
