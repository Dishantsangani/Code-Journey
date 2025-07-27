function add(a, b, cb) {
  let result = a + b;
  cb(result);

  return () => console.log(result);
}
// add(2, 4, (val) => console.log(val));
let resultfunction = add(2, 4, () => {});
resultfunction();
