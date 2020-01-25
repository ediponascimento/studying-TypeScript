"use strict";
exports.__esModule = true;
var PrintAnything = /** @class */ (function () {
    function PrintAnything() {
    }
    PrintAnything.prototype.printAnything = function (param) {
        for (var i = 0; i < param.length; i++) {
            console.log(param[i]);
        }
    };
    return PrintAnything;
}());
exports.PrintAnything = PrintAnything;
var print = new PrintAnything();
print.printAnything([1, 2, 3, 4, 5, 8]);
print.printAnything(['C', 'B', 'C', 'A']);
