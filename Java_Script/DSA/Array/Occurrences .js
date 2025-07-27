let array = [1, 2, 3, 4, 5, 5, 4, 3, 2, 6, 87, 9, 5, 2];
let obj = {}; // using  Object is unique keys
for (let i = 0; i < array.length; i++) {
  if (array[i] in obj) {
    obj[array[i]] = obj[array[i]] + 1;
  } else {
    obj[array[i]] = 1;
  }
}
console.log(obj);
