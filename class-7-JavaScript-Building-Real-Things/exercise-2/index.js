
let colors = ['red', 'orange', 'green', 'blue']
let num = Math.floor(Math.random() * 5);
let num2 = Math.floor(Math.random() * 5);


function changeColor() {
    document.body.style.backgroundColor = colors[num]
    document.getElementById("title").style.color = colors[num2]
}



