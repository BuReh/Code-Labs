var Human = /** @class */ (function () {
    function Human() {
        this.birthYear = 0;
    }
    Human.prototype.ageDifference = function () {
        console.log("The age difference between my animal and I is " + (animal.birthYear - this.birthYear) + " years.");
    };
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.birthYear = 0;
    }
    return Animal;
}());
var human = new Human();
human.birthYear = 2000;
var animal = new Animal();
animal.birthYear = 2015;
human.ageDifference();
