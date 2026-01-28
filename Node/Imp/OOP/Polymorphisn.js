class Animal {
  speak() {
    console.log("Animal Make a sound");
  }
}

class dog extends Animal {
  speak() {
    console.log("Dog Make A sound");
  }
}

class cat extends Animal {
  speak() {
    console.log("Cat Make A Sound");
  }
}

const animals = [new dog(), new cat()];
animals.forEach((animal) => animal.speak());

// Dog and Cat inherit from Animal.

// Both override the speak() method → this is polymorphism.

// forEach iterates through the array and calls speak() on each instance.
