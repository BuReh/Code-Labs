class Human{
    birthYear: number = 0;
    
    ageDifference(){
        console.log("The age difference between my animal and I is "+ (animal.birthYear - this.birthYear)+ " years.")
    }
}

class Animal{
    birthYear: number = 0;
}

let human = new Human();
human.birthYear = 2000;
let animal = new Animal();
animal.birthYear = 2015;

human.ageDifference();