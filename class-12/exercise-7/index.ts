class Animal {
   name: string = '';
   age: number = 0;
   region: string = '';
    
   
   
}
class Region{
   name: string = "Africa";
}

let animal = new Animal();
animal.name = "Johnny the Lion";
animal.age = 5;
animal.region = "Africa";

console.log(animal);