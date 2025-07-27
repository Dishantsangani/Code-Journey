const products = [
  { id: 4, name: "Monitor", price: 200 },
  { id: 2, name: "Smartphone", price: 600 },
  { id: 1, name: "Laptop", price: 800 },
  { id: 3, name: "Tablet", price: 300 },
];

let newfdata = products.filter((num) => num.price < 400);
console.log('newfdata: ', newfdata) 
