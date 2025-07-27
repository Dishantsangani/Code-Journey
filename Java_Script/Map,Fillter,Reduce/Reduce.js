// const mynums = [1, 2, 3];

// const total = mynums.reduce((acc, curval) => {
//   console.log(`Acc :${acc} Curval: ${curval}`);
//   return acc + curval;
// }, 5);

// console.log("total:", total);

// Ex.

const cart = [
  {
    name: "Javascript",
    price: 3999,
  },
  {
    name: "Python",
    price: 4999,
  },
  {
    name: "App Dev",
    price: 6999,
  },
  {
    name: "Cyber Secrity",
    price: 27000,
  },
];

const total = cart.reduce((acc, item) => acc + item.price, 0);
console.log("total: ", total);
