class Weather{
    constructor(){
        this.app_id = '777fdc96dace7f6c8bf1dff9d5a5497c';
    }

    //Function to get weather data
    async getWeather(city, code){
        this.city = city;
        this.country_code = code;
        let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country_code}&APPID=${this.app_id}&units=metric`);

        //checking for http errors
        try{
            // If not OK - throw an error
            if(response.status!=200){
                throw new httpError(response);
            }
            else{
                let weather_data = await response.json(); 
                return weather_data;
            }
        }
        catch(err){
            return err;
        }
        
    }
}