// const key = 'Lc3RY6xtATAECS3QncLN5JukJtpYOLno'; //API Key берём на сайте погоды


// //Current Conditions API get weather information
// const getWeather = async (locationId) => {

//     const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
//     const query = `${locationId}?apikey=${key}`;

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0];

// };




// //Locations API, get city information

// const getCity = async city => {

//     const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//     const query = `?apikey=${key}&q=${city}`; //вопросительный знак, это означает, что мы добавляем параметры запроса

//     const response = await fetch(base + query);
//     const data = await response.json();

//     return data[0]; //[0] - что бы отображало первый найденный вариант

// };

class Forecast {
    constructor() {
        this.key = 'Lc3RY6xtATAECS3QncLN5JukJtpYOLno';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);
        return { cityDetails, weather };
    }
    async getCity(city) {
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }
    async getWeather(locationId) {
        const query = `${locationId}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    }
}