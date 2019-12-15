class Concessionaria {
    
    private endereco: string;
    private listaDeCarros: any;

    constructor (endereco: string) {
        this.endereco = endereco;
    }

    private fornecerEndereco (): string {
        return this.endereco;
    }

    public mostrarListaDeCarros (): any {
        return this.listaDeCarros;
    }
}