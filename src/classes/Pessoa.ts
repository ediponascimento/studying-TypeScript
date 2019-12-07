
class Pessoa {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public greeting(): void {
    console.log(`Hi, my name is: ${this.name}`);
  }

}

let pessoa = new Pessoa("Édipo Nascimento");
pessoa.name = 'Édipo Nascimento';

pessoa.greeting();