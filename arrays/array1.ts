// helping with inference when extracting values
const carByMakers: string[] = ['Corola','Cruize','I30']; 
const myCar = carByMakers.pop();
console.log(myCar);

// prevent incompatilbe values
// carByMakers.push(100)

// help with 'map'
const car = carByMakers.map((car: string): string => {
  return car.toUpperCase();
})

console.log(car);

