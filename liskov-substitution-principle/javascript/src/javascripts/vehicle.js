class Vehicle {
  constructor(model) {
    this._model = model;
  }

  get model() {
    return this._model; 
  }

  startEngine() {
    return 'Vroom vroom!';
  }
}

class Car extends Vehicle {
  constructor(model) {
    super(model);
    this._wheels = 4;
  }

  get wheels() {
    return this._wheels;
  }
}

class Person {
  constructor(ownedVehicle) {
    this._vehicle = ownedVehicle;
  }

  drive() {
    return `Getting into my ${this._vehicle.model} and driving to the store.`;
  }
}

module.exports = {
  Vehicle: Vehicle,
  Car: Car,
  Person: Person
}
