const add = (x: number, y: number ): number => x + y;

const subtract = (x: number, y: number) => x - y;

function divide(a: number, b: number): number {
  return a / b;
}

const mode = function(y: number, z: number): number {
  return y % z;
}

const multiply = (x: number, y: number) => x * y; 

const logger = (message: string): string => message;

const throwError = (errorMessage: string): Error => {
  throw new Error(errorMessage)
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = ({ date, weather } : { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}


logWeather(todayWeather);
console.log(add(5, 7));
console.log(subtract(5 ,7 ));
console.log(divide(12, 2));
console.log(mode(5, 2));
console.log(multiply(4, 5));
console.log('Something went wrong!');
console.log(throwError('Authentication error'));