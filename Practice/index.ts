
class User{
    name: string = '';
    age: number = 0;
    occupation: string = '';

    //A method is a function defined in a class
    eat(){
        console.log("I am eating.")
    }

    logMyName(){
        console.log("My name is " + this.name)
    }

    logMyDetails(){
        this.logMyName();
        console.log("My age is "+this.age)
        console.log("My occupation is "+this.occupation)
    }
}

class Animal{
    legCount: number = 0;
    species: string = '';
    breed: string = '';

    //method
    drink(){
        console.log("I am drinking");
    }

}

let animal = new Animal();
animal.breed = 'Snake';
animal.species = 'Copperhead';
animal.legCount = 0;
console.log(animal);
animal.drink();

//creating a user instance/object
let user:User = new User();
user.name = "John";
user.age = 20;
user.occupation = "Doctor";

console.log(user);
user.eat();
user.logMyName();


let zach:User = new User();
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