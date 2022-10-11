class Logger{
    logRandomNumber(){
        console.log(Math.random()*1000);
    }
    logARandomColor(){
        let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
        let num = Math.random()*5;
        num = Math.floor(num);
        console.log(colors[num]);
    }
    logTo100(){
        for(let i = 0; i <= 100; i++){
            console.log(i);
        }
    }
}
let logger = new Logger();
logger.logTo100(); //Execute different instances by changing syntax after logger.