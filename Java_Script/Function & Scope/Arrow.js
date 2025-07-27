const user = {
  name: "Dishant",
  age: 22,
  welcome: function () {
    console.log(`${this.name} welcome to Website`);
  },
};

user.welcome();

// implicit  Return
const name = (num1, num2) => num1 + num2;
// Ex.
const chai = () => {
  let use = "Dishant";
  console.log(this);
};
chai();
