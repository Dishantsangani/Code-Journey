// const user = {};
// user.name = "Dishant";
// user.age = 22;
// console.log(user);

// Nested Object
// const regular = {
//   email: "devsangani@gmail.com",
//   fullname: {
//     ufname: {
//       fname: "Dishant",
//     },
//   },
// };
// console.log(regular.fullname.ufname.fname);

// const Obje1 = { 1: "A", 2: "B" };
// const Obje2 = { 3: "C", 4: "D" };

// const Obj3 = { ...Obje1, ...Obje2 };
// console.log("Obj3: ", Obj3);

// Other Way
// const Obje4 = Object.assign(Obje1, Obje2);
// console.log('Obje4: ', Obje4)

// That all Prev And Next Add Value Are Stored In One Single Arrray
function cart(...num1) {
  return num1;
}
console.log(cart(2, 5, 27));
