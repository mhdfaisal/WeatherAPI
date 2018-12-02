class UI{
    constructor(){
        this.uiNodes = document.querySelectorAll('[class*="w-"]');
        this.icon = document.querySelector('.icon');
    }

    //To get current date
    getDate(date){
        let today = new Date(date).toUTCString();
        return today;
    }
   
    //To paint the UI
    paint(weather){
        //Array to hold the data to be populated
        const weatherArray = [`${weather.name}, 
            ${weather.sys.country}`,
             this.getDate(Date.now()), 
            `${weather.weather[0].main} - ${weather.weather[0].description}`,
            `${weather.main.temp} <small><sup>C</sup></small>`,
            `${weather.main.humidity}%`,
            `${weather.wind.speed} m/s`,
            `${weather.main.pressure} hPa`];

        //Populating the data
        for(let x in weatherArray){
            this.uiNodes[x].innerHTML = weatherArray[x];
        }
        
        //Adding Weather icon to the UI
        let iconId = weather.weather[0].icon;
        this.icon.setAttribute('src',`http://openweathermap.org/img/w/${iconId}.png`);
    }
}