class student {
  constructor(name, age) {
    this.studentname = name
    this.studentage = age
  }
  // This is Prototype Method
  hello() {
    console.log(`Hello Everyone my Name is ${this.studentname} and My Age is ${this.studentage}`);
  }
  // This is a Static Method
  static staticmethod() {
    console.log("Static Function");
  }

}
let a = new student("Dishant", 27)
let b = new student("Ram Kumar", 22)

a.hello()
b.hello()
student.staticmethod()
