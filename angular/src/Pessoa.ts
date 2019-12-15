class Pessoa {
    private nome: string;
    private carro: any;
    private carroPreferido: string;

    constructor (nome: string, carroPreferido: string) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }

    public dizerNome (): string {
        return this.nome;
    }

    public dizerCarroPreferido(): any {
        return this.carroPreferido;
    }

    public comprarCarro(carro: any) {
        this.carro = carro;
    }

    public dizerCarroQueTem(): any {
        return this.carro;
    }

}

let pessoa = new Pessoa('José', 'Veloster');
console.log(pessoa.dizerCarroPreferido());
console.log(pessoa.dizerNome());