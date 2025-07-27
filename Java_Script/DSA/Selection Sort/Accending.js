let accending = [20, 12, 56, 3, 27, 59, 75, 58];
function dev(data) {
  let minId;
  for (let i = 0; i < data.length; i++) {
    minId = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[minId] > data[j]) {
        minId = j;
      }
    }
    let temp = data[minId];
    data[minId] = data[i];
    data[i] = temp;
  }
}
dev(accending);
console.log("accending: ", accending);

// Ex.2
// Accending Decending in array
let arr = [6, 9, 5, 8, 4, 7, 3, 2, 1];
let acc = arr.sort();
console.log("Accending", acc);
