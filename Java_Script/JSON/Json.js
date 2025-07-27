let a = [
  {
    name: "Dishant",
    age: 22,
    address: "Nikol",
  },
  {
    name: "Dev",
    age: 27,
    address: "Nikol",
  },
];

localStorage.setItem("name", JSON.stringify(a));

let storedData = JSON.parse(localStorage.getItem("name"));
console.log(storedData);
