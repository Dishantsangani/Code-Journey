class Car {
  startengine() {
    console.log("Start Engine..");
    this.fuelinjected();
    this.ignition();
  }
  fuelinjected() {
    console.log("Fuel is injected");
  }
  ignition() {
    console.log("Engine ignited");
  }
}

const vehicle = new Car();
vehicle.startengine();

// The user only interacts with startengine().

// The internal steps (fuelinjected(), ignition()) are hidden.
