var animal = /** @class */ (function () {
    function animal(theName, theAge, thelocation) {
        this.name = theName;
        this.age = theAge;
        this.location = thelocation;
    }
    animal.prototype.something = function () {
        console.log(this.name + ' is ' + this.age + ' years old and is from ' + this.location);
    };
    return animal;
}());
var ani = new animal("Johnny the Lion", 5, "Africa");
ani.something();
