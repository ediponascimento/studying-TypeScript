"use strict";
exports.__esModule = true;
var ArraysOfNumbers = /** @class */ (function () {
    function ArraysOfNumbers(collection) {
        this.collection = collection;
    }
    ;
    ArraysOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArraysOfNumbers;
}());
exports.ArraysOfNumbers = ArraysOfNumbers;
var ArraysOfStrings = /** @class */ (function () {
    function ArraysOfStrings(collection) {
        this.collection = collection;
    }
    ;
    ArraysOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArraysOfStrings;
}());
exports.ArraysOfStrings = ArraysOfStrings;
var ArrayOfAnything = /** @class */ (function () {
    function ArrayOfAnything(collection) {
        this.collection = collection;
    }
    ;
    ArrayOfAnything.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfAnything;
}());
exports.ArrayOfAnything = ArrayOfAnything;
var arrStrings = new ArrayOfAnything(['A', 'C', 'B']);
var arrNumbers = new ArrayOfAnything([1, 2, 3, 7, 9, 2, 1]);
console.log(arrStrings);
console.log(arrNumbers);
