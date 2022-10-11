class Person{
    favoriteColor: string = '';

    LogFavoriteColor(){
        console.log(this.favoriteColor)
    }
}

let person = new Person();
person.favoriteColor = 'Blue';
person.LogFavoriteColor();