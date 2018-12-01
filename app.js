//Init weather object
const weather = new Weather;

//Init UI object
const ui = new UI;

weather.getWeather()
.then(data => ui.paint(data))
.catch(err => console.log(err));














// async function getweather(){
//     let response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Miami,US&APPID=777fdc96dace7f6c8bf1dff9d5a5497c');
//     let data = await response.json();
//     return data;

// }