let decending = [20, 12, 56, 3, 27, 59, 75, 58];
function dev(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[minId] < data[j]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}
dev(decending);
console.log("decending: ", decending);

//  Decending
let arr2 = [6, 9, 5, 15, 8, 4, 7, 3, 2, 1];
let dec = arr2.sort((a, b) => b - a);
console.log("Decending", dec);
