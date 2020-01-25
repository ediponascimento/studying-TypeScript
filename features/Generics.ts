export class ArraysOfNumbers {
  constructor(public collection: number[]) { };

  get(index: number): number {
    return this.collection[index];
  }
}

export class ArraysOfStrings {
  constructor(public collection: string[]) { };

  get(index: string): string {
    return this.collection[index];
  }
}

export class ArrayOfAnything<T> {
  constructor(public collection: T[]) { };

  get(index: number): T {
    return this.collection[index];
  }
}

const arrStrings = new ArrayOfAnything<string>(['A', 'C', 'B']);
const arrNumbers = new ArrayOfAnything<number>([1, 2, 3, 7, 9, 2, 1]);

console.log(arrStrings);
console.log(arrNumbers);