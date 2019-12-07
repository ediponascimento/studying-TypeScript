var Pessoa = /** @class */ (function () {
    function Pessoa(name) {
        this.name = name;
    }
    Pessoa.prototype.greeting = function () {
        console.log("Hi, my name is: " + this.name);
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Édipo Nascimento");
pessoa.name = 'Édipo Nascimento';
pessoa.greeting();
