let person = {
  name: "Dishant",
  age: 22,
  address: "Nikol",
};
let newfilter = Object.keys(person).reduce((acc, key) => {
  acc[key] =
    typeof person[key] === "string" ? person[key].toUpperCase() : person[key];
  return acc;
}, {});
console.log(newfilter);
