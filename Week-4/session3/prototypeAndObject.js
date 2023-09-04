const person = {
  _age: 0,
  set setAge(age) {
    this._age = this._age + age;
  },

  get getAge() {
    return this._age;
  },
};

Object.defineProperties(person, {
  name: {
    value: "akhil",
    writable: false,
    enumerable: true,
    configurable: false,
  },
  email: {
    value: "akhil@gmail.com",
    writable: false,
    enumerable: true,
    configurable: false,
  },
});

/** prototype */
function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function () {
  return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
};

class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    super(make, model, year);
    this.numDoors = numDoors;
  }

  getDetails() {
    return `${super.getDetails()}, Number of Doors: ${this.numDoors}`;
  }
}

// Create an instance of Vehicle
const vehicle = new Vehicle("Toyota", "Camry", 2022);

// Create an instance of Car
const car = new Car("Honda", "Accord", 2023, 4);

console.log(vehicle.getDetails());
console.log(car.getDetails());
