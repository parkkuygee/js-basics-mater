const weather = document.querySelector(".js-weather");
const API_KEY ="3223c661643adc2fc2fc27b697013305";
const COORDS = 'coords';

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric
    `).then(function(response) {
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
} 

function saveCords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucess(position){
    const latitude =position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude ,
        longitude 
    };
    saveCords(coordsObj); 
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("Cant access geo location");
}


function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucess,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
        askForCoords();
    } else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude ,parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();