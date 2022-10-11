var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
        this.occupation = '';
    }
    //A method is a function defined in a class
    User.prototype.eat = function () {
        console.log("I am eating.");
    };
    User.prototype.logMyName = function () {
        console.log("My name is " + this.name);
    };
    User.prototype.logMyDetails = function () {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
        console.log("My occupation is " + this.occupation);
    };
    return User;
}());
var Animal = /** @class */ (function () {
    function Animal() {
        this.legCount = 0;
        this.species = '';
        this.breed = '';
    }
    //method
    Animal.prototype.drink = function () {
        console.log("I am drinking");
    };
    return Animal;
}());
var animal = new Animal();
animal.breed = 'Snake';
animal.species = 'Copperhead';
animal.legCount = 0;
console.log(animal);
animal.drink();
//creating a user instance/object
var user = new User();
user.name = "John";
user.age = 20;
user.occupation = "Doctor";
console.log(user);
user.eat();
user.logMyName();
var zach = new User();
zach.age = 16;
zach.name = 'Zach';
zach.occupation = 'Student';
zach.logMyDetails();
//let user = {
//    name: "John",
//    age: 10,
//    occupation: "doctor"
//}
//windows
//npx tsc --init
//transpile this into javascript
//npx tsc file-name.ts
