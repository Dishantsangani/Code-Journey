const Duplicate = [1, 2, 3, 4, 5, 6, 4, 3, 5, 27, 30];
const myDuplicate = Duplicate.filter((item, index) => {
  return Duplicate.indexOf(item) === index;
});

console.log("myDuplicate: ", myDuplicate);

// New

const arr = [1, 1, 2, 3, 6, 6, 3, 1];
const unicarr = [...new Set(arr)];
console.log("unicarr: ", unicarr);
