"use strict";
var HoldAntything = /** @class */ (function () {
    function HoldAntything() {
    }
    return HoldAntything;
}());
var holdNumber = new HoldAntything();
holdNumber.data = [1, 5, 6, 8, 9];
console.log(holdNumber.data);
var holdString = new HoldAntything();
holdString.data = ["Édipo", "fernado", "Rosa"];
console.log(holdString);
var holdType = new HoldAntything();
holdType.data = [new Date("05/01/2018"), "Edipo", 5, undefined];
console.log(holdType);
