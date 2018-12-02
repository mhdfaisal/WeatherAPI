class Storage{
    constructor(){
        this.city;
        this.code;
        this.defaultCity = 'San Francisco';
        this.defaultCode = 'US';
    }
    getLocation(){
        if(localStorage.getItem('location')!=null){
            let locationData = JSON.parse(localStorage.getItem('location'));
            this.city = locationData.city;
            this.code = locationData.code;
        }
        else{
            this.city = this.defaultCity;
            this.code = this.defaultCode;
        }
        return {
            city:this.city,
            code:this.code
        }
    }

    setLocation(){
        let city = document.querySelector('#city').value;
        let code = document.querySelector('#code').value;
        if(city!='' && code!=''){
            const data = {city:city, code:code};
            localStorage.setItem('location', JSON.stringify(data));
        }
    }
}