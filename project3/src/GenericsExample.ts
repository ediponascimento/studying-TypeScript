class HoldAntything<T> {
  data: T;
}

const holdNumber = new HoldAntything<number[]>();
holdNumber.data = [1, 5, 6, 8, 9];
console.log(holdNumber.data);

type Teste = [Date, string, number, undefined];

const holdString = new HoldAntything<string[]>();
holdString.data = ["Édipo", "fernado", "Rosa"];
console.log(holdString);

const holdType = new HoldAntything<Teste>();
holdType.data = [new Date("05/01/2018"), "Edipo", 5, undefined];
console.log(holdType);
