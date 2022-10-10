class animal {
    name:string;
    age: number;
    location:string;
     constructor(theName:string,theAge:number,thelocation:string){
        this.name = theName;
        this.age = theAge;
        this.location = thelocation;
     }
     something(){
        console.log( this.name+ ' is ' +this.age +' years old and is from '+this.location)
     }
   
}

let ani = new animal("Johnny the Lion", 5, "Africa");
ani.something()