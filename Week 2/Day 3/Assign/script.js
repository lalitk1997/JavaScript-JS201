// console.log("Script Working!")
let city = document.querySelector("form").addEventListener("submit", getData);

// ASYNC RETURNS PROMISE
async function getData(){
    event.preventDefault();
    let city = document.querySelector("#city_name").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
    try{
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        appendData(data);
    }catch(err){
        console.log(err);
    }
};

function appendData(data){
    let appenddiv = document.querySelector("#container");
    appenddiv.innerHTML = null;

    let min = document.createElement("p");
    min.innerText = data.main.temp_min;
    let max = document.createElement("p");
    max.innerText = data.main.temp_max;
    let wind = document.createElement("p");
    wind.innerText = data.wind.speed;
    let clouds = document.createElement("p");
    clouds.innerText = data.clouds.all;
    let sunrise = document.createElement("p");
    sunrise.innerText = data.sys.sunrise;
    let sunset = document.createElement("p");
    sunset.innerText = data.sys.sunset;
    console.log(min, max, wind, clouds, sunrise, sunset);
    
    appenddiv.append(min, max, wind, clouds, sunrise, sunset);
    let iframe = document.getElementById("gmap_canvas")
    iframe.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
};

