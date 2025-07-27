let arr = [10, 20, 0, 16, 18, 3, 27];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < arr[0]) {
    arr[0] = arr[i];
    sum = arr[0];
  }
}

console.log("sum: ", sum);
