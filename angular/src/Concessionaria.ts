import { Carro } from './Carro';

export class Concessionaria implements IConcessionaria {
    
    private endereco: string;
    private listaDeCarros: Carro[];

    constructor (endereco: string, listaDeCarros: Carro[]) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco (): string {
        return this.endereco;
    }

    public mostrarListaDeCarros (): Carro[] {
        return this.listaDeCarros;
    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'De Segunda a Sexta das 08:00 às 18:00 e Sába    do das 08:00 às 12:00';
    }
}
