class Vehicle {
  public drive(): void {
    console.log('chugga chugga');
  }
  public honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  public drive(): void {
    console.log('vroom')
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();