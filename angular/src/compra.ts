import { Pessoa } from './Pessoa';
import { Moto } from './Moto';
import { Concessionaria } from './Concessionaria';
import { Carro } from './Carro';

let bmwx1 = new Carro('BMW X1', 4);
let bmwx2 = new Carro('BMW X2', 4);
let bmwx3 = new Carro('BMW X3', 4);
let bmwx4 = new Carro('BWM X4', 4);

let xj6 = new Moto();
xj6.acelerar();
console.log(xj6.velocidadeAtual());

let listaDeCarros: Carro[] = [bmwx1, bmwx2, bmwx3, bmwx4];

// adicionado uma lista de carros ao objeto concessionaria
let concessionaria = new Concessionaria('Avenida Paulista, 128', listaDeCarros);

// instanciando objeto da classe pessoa
let cliente = new Pessoa('Enzo Nascimento Guimarães', 'BMW X1');

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        // compra o carro
        return cliente.comprarCarro(carro);
    }
});



console.log(cliente.dizerCarroQueTem());