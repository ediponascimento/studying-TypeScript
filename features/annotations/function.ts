// when to use annotaions
// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
console.log(json);

const coordinates: {x: string, y: string} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++ ) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

console.log(foundWord);

// 3) varibales whose type cannot be infered
let numbers = [-10, -15, -30];
let numberAboveZero: boolean | number = false;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

console.log(numbers);

