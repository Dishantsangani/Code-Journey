let arr = [20, 40, 60, 5, 10, 70, 80, 99];
let found = 5;
let item = undefined;

for (i = 0; i < arr.length - 1; i++) {
  if (arr[i] == found) {
    item = i;
    break;
  }
}
console.log("Founded Index", item);
