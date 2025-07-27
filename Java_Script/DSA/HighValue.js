let arr = [100, 20, 15, 16, 18, 50, 0];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > sum) {
    sum = arr[i];
  }
}
console.log("sum: ", sum);
