class User{
    name: string = '';
    age: number = 0;
    height: string = '';
}

let person:User = new User();
person.name = "Amy";
person.age = 25;
person.height = "5'6";

console.log(person);