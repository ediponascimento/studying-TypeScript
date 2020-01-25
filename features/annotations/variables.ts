const apples: number = 5;
console.log(typeof apples);

let speed: string = 'fast';
console.log(typeof speed);

let hasName: boolean = true;
console.log(typeof hasName);

let nothinMuch: null = null;
console.log(typeof nothinMuch);

// built in object
let now: Date = new Date();
console.log(typeof now);

// array of strings
let color: string[] = ['res', 'green', 'blue', 'pink'];
console.log(color);
console.log(typeof color);

let values: number[] = [11, 5, 7, 9, 15, 25];
console.log(typeof values);
console.log(values);

let truths: boolean[] = [true, false, false, true, true];
console.log(truths);
console.log(typeof truths);

class Cachorro {}
let cachorro: Cachorro = new Cachorro();

let point: {x: number, y: number} = {
  x: 5,
  y: 9
};

console.log(point);