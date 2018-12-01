class UI{
    constructor(){
        this.uiNodes = document.querySelectorAll('[class*="w-"]');
        this.icon = document.querySelector('.icon');
    }

    //to Format dates
    formatDate(date){
        const d = new Date(date);
        return d.toUTCString();
    }
    //To paint the UI
    paint(weather){
        //Array to hold the data to be populated
        const weatherArray = [`${weather.name}, 
            ${weather.sys.country}`,
            this.formatDate(weather.dt), 
            `${weather.weather[0].main} - ${weather.weather[0].description}`,
            `${weather.main.temp} C`,
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