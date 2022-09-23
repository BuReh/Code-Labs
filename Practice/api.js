function something() {
    fetch('https://www.boredapi.com/api/activity')
    .then(response => response.json())
    .then(data => {
        
        let thingstodo = document.getElementById('things');
        thingstodo = data.activity;
        console.log(thingstodo);
        let text = thingstodo;
        document.getElementById('things').innerText = text;
    });
};
