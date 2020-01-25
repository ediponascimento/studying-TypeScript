interface Reportbale {
  summary(): string ;
}

const drink = {
  name: 'brown',
  carboneted: true,
  sugar: 40,
  summary(): string {
    return `Name: ${this.name}`;
  }
}

const oldCar = {
  name: 'Corsa',
  year: 1990,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printSummary = (item: Reportbale) : void => { 
  console.log(item.summary());
 }

printSummary(drink);
printSummary(oldCar);