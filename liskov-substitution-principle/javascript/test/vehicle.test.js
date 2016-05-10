'use strict';

const chai = require('chai')
    , expect = chai.expect;

const because = describe
    , when = describe;

import { Car, Vehicle, Person } from "../src/javascripts/vehicle";

describe('Vehicle', () =>  {
  it('returns the model name', () => {
    let vehicle = new Vehicle('Tesla');
    expect(vehicle.model).to.eql('Tesla');
  });
});

describe('Car#startEngine', () => {
  it('should return vroom', () =>  {
    let car = new Car('Tesla');
    let startEngine = car.startEngine();

    expect(startEngine).to.eql('Vroom vroom!');
  });
});

describe('Person#drive', () => {
  it('should return a sentence when passed an instance of Vehicle', () => {
    let vehicle = new Vehicle('Ford');
    let david = new Person(vehicle);

    expect(david.drive()).to.eql('Getting into my Ford and driving to the store.');
  });

  because('Car is a subclass of Vehicle and we\'ve followed Liskov', () => {
    it('should return a sentence when passed an instance of Car', () => {
      let car = new Car('Tesla');
      let david = new Person(car);

      expect(david.drive()).to.eql('Getting into my Tesla and driving to the store.');
    });
  });
});
