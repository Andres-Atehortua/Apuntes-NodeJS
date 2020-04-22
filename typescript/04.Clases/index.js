"use strict";
//CLASES
var Pizza = /** @class */ (function () {
    function Pizza() {
        this.tomate = false;
        this.queso = "";
        this.bacon = false;
        this.masa = "";
        this.otherIngredients = [""];
    }
    Pizza.prototype.setMasa = function (masa) {
        this.masa = masa;
        return this;
    };
    Pizza.prototype.setCheese = function (queso) {
        this.queso = queso;
        return this;
    };
    Pizza.prototype.setBacon = function () {
        this.bacon = true;
        return this;
    };
    Pizza.prototype.setOhterIngredients = function (ingredients) {
        this.otherIngredients = ingredients;
        return this;
    };
    Pizza.prototype.build = function () {
        return this;
    };
    return Pizza;
}());
var pepperoniPizza = new Pizza();
pepperoniPizza
    .setBacon()
    .setCheese("Mozzarella")
    .setOhterIngredients(["pimienta", "ajo", "tomate"])
    .setMasa("Fina")
    .build();
console.log(pepperoniPizza);
