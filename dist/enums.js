var Direcao;
(function (Direcao) {
    Direcao[Direcao["Norte"] = 0] = "Norte";
    Direcao[Direcao["Leste"] = 1] = "Leste";
    Direcao[Direcao["Sul"] = 2] = "Sul";
    Direcao[Direcao["Oeste"] = 3] = "Oeste";
})(Direcao || (Direcao = {}));
;
// Direcao Norte => 0
// Direcao Leste => 1
// Direcao Sul   => 2
// Direcao oeste => 3
var d = Direcao.Norte;
console.log(d);
var dString = Direcao[0];
console.log(dString);
