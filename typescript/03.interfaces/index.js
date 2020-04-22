"use strict";
//INTERFACES -> Una interfaz se encarga de definir un comportamiento o propiedades.
var dog = {
    name: "Baxter",
    color: "White and brown",
    age: 8,
};
var MyComponent = /** @class */ (function () {
    function MyComponent() {
    }
    MyComponent.prototype.ngOnInit = function () {
        console.log();
    };
    return MyComponent;
}());
