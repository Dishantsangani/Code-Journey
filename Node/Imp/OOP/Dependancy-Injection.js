class Engine {
  start() {
    console.log("Engine Started");
  }
}

class car {
  constructor(engine) {
    this.engine = engine;
  }
  drive() {
    this.engine.start();
    console.log("Car is Driving");
  }
}

const engine = new Engine();
const cart = new car(engine);
cart.drive();
