//Init weather object
const weather = new Weather;

//Init UI object
const ui = new UI;

//Init Storage object
const storage = new Storage;
let loc = storage.getLocation();

const getweather = ()=>{
    weather.getWeather(loc.city, loc.code)
    .then(data => ui.paint(data))
    .catch(err => console.log(err));
}

//DOM content loaded listener
document.addEventListener('DOMContentLoaded', ()=>{
    getweather();
})

//addEventListener to the modal save button
document.querySelector('#save').addEventListener('click', (e)=>{
    e.target.setAttribute('data-dismiss','modal');
    storage.setLocation();
    window.location.reload();
});













// async function getweather(){
//     let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Miami,US&APPID=777fdc96dace7f6c8bf1dff9d5a5497c');
//     let data = await response.json();
//     return data;

// }