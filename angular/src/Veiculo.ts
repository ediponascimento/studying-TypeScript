export class Veiculo {

    protected modelo: string;
    private velocidade: number = 10;

    public acelerar (): void {
        this.velocidade = this.velocidade + 10;
    }

    public parar (): void {
        this.velocidade = 0;
    }

    public velocidadeAtual (): number {
        return this.velocidade;
    }

}

