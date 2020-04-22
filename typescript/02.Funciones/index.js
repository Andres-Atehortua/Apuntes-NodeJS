"use strict";
//FUNCIONES
function sum(a, b) {
    return a + b;
}
sum(1, 3);
function mathOperation(cb, a, b) {
    return cb(a, b);
}
var result = mathOperation(function (num1, num2) { return num1 + num2; }, 5, 5);
console.log(result);
