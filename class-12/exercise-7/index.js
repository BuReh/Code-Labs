var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
        this.age = 0;
        this.region = '';
    }
    return Animal;
}());
var Region = /** @class */ (function () {
    function Region() {
        this.name = "Africa";
    }
    return Region;
}());
var animal = new Animal();
animal.name = "Johnny the Lion";
animal.age = 5;
animal.region = "Africa";
console.log(animal);
