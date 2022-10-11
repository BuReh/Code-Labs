var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.logRandomNumber = function () {
        console.log(Math.random() * 1000);
    };
    Logger.prototype.logARandomColor = function () {
        var colors = ['red', 'green', 'blue', 'yellow', 'purple'];
        var num = Math.random() * 5;
        num = Math.floor(num);
        console.log(colors[num]);
    };
    Logger.prototype.logTo100 = function () {
        for (var i = 0; i <= 100; i++) {
            console.log(i);
        }
    };
    return Logger;
}());
var logger = new Logger();
logger.logTo100();
