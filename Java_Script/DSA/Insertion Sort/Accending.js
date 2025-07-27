let accending = [64, 34, 25, 57, 86, 97, 27, 12];
function dev(data) {
  for (let i = 0; i < data.length; i++) {
    let current = data[i];
    let prev = i - 1;
    while (prev >= 0 && data[prev] > current) {
      data[prev + 1] = data[prev];
      prev--;
    }
    data[prev + 1] = current;
  }
}
dev(accending);
console.log("accending: ", accending);
 