"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = require("./Pessoa");
var Moto_1 = require("./Moto");
var Concessionaria_1 = require("./Concessionaria");
var Carro_1 = require("./Carro");
var bmwx1 = new Carro_1.Carro('BMW X1', 4);
var bmwx2 = new Carro_1.Carro('BMW X2', 4);
var bmwx3 = new Carro_1.Carro('BMW X3', 4);
var bmwx4 = new Carro_1.Carro('BWM X4', 4);
var xj6 = new Moto_1.Moto();
xj6.acelerar();
console.log(xj6.velocidadeAtual());
var listaDeCarros = [bmwx1, bmwx2, bmwx3, bmwx4];
// adicionado uma lista de carros ao objeto concessionaria
var concessionaria = new Concessionaria_1.Concessionaria('Avenida Paulista, 128', listaDeCarros);
// instanciando objeto da classe pessoa
var cliente = new Pessoa_1.Pessoa('Enzo Nascimento Guimarães', 'BMW X1');
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        // compra o carro
        return cliente.comprarCarro(carro);
    }
});
console.log(concessionaria.fornecerHorarioDeFuncionamento());
console.log(cliente.dizerCarroQueTem());
