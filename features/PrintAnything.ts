export class PrintAnything<T> {
  printAnything<T>(param: T[]): void {
    for ( var i = 0; i < param.length; i++ ) {
      console.log(param[i]);
    }
  }
}

const print = new PrintAnything();

print.printAnything<number>([1, 2, 3, 4, 5, 8]);
print.printAnything<string>(['C', 'B', 'C', 'A']);