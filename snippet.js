"use strict";
exports.__esModule = true;
var message = 'Hello World';
var is_beginner = false;
var sentence = "My name is gabriel. \nMy message to you is " + message;
var sentence2 = "My name is gabriel. \nMy message to you is " + message;
var sentence2 = "My name is gabriel. My message to you is " + message;
var values = [1, 2, 3, 4, null];
function greeter(name) {
    return 'Hello ' + name;
}
var g = greeter('gabriel');
function addNumber(n1, n2) {
    return n1 + n2;
}
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log('Hello ' + this.employeeName);
    };
    return Employee;
}());
var em = new Employee('John');
em.greet();
