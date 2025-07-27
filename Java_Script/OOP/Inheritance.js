// First Class
class employee {
  constructor(name, age, salary) {
    this.emname = name
    this.emage = age
    this.emsalary = salary
    console.log("Constructor : Employee");
  }
  info() {
    console.log(`Hello Everyone My Name is ${this.emname} and my Age is ${this.emage} and my Salary Id ${this.emsalary}`);
  }
}

// Second Class
class manager extends employee {
  info() {
    let ta = 1000;
    let pa = 300;
    let totalsalary = this.emsalary + ta + pa
    console.log(`Hello Everyone My Name is ${this.emname} and my Age is ${this.emage} and my Salary Is ${totalsalary}`);
  }
}

// Three Class
class test extends manager {

}
let a = new test("Dishant", 22, 27000)
// let b = new manager("dev", 27, 700000)
a.info()
// b.info()
