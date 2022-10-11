var User = /** @class */ (function () {
    function User() {
        this.name = '';
        this.age = 0;
        this.height = '';
    }
    return User;
}());
var person = new User();
person.name = "Amy";
person.age = 25;
person.height = "5'6";
console.log(person);
