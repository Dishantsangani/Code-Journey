class animal {
  eat() {
    console.log("Dog Is Eating....");
  }
}

class Dog extends animal {
  brak() {
    console.log("Dog Is Braking... ");
  }
}

const dog1 = new Dog();
dog1.eat();
dog1.brak();

// Animal → parent class

// Dog → child class (extends Animal)

// Dog inherits eat() method from Animal

// Dog can also have its own method bark()
