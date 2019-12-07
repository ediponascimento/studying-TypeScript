class Pessoa {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let pessoa = new Pessoa("Édipo Nascimento");
console.log(pessoa.name);