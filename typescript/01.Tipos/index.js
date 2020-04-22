"use strict";
//Types
var framework = "Angular";
var isProduction = true;
var PORT = 3000;
var nameOfFriend = "Jose";
var styles = ["./css/style.css", nameOfFriend];
var sayHello = function (name) { return "Hello " + name; };
var value = sayHello(nameOfFriend);
console.log(value);
