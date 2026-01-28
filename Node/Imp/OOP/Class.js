class Car {
  constructor(model, name) {
    this.model = model;
    this.name = name;
  }

  drive() {
    console.log(`Hello Everyone I have A ${this.name} and There ${this.model}`);
  }
}

const Car1 = new Car("model x", "tesla");
Car1.drive();

// Class = Blueprint (Car)

// Constructor = Sets values when object is created (model, name)

// Method = Defines behavior (drive())

// Object = Real instance of class (Car1)
