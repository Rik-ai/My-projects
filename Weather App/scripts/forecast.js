const key = 'Lc3RY6xtATAECS3QncLN5JukJtpYOLno'; //API Key берём на сайте погоды


//Current Conditions API get weather information
const getWeather = async (locationId) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationId}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};




//Locations API, get city information

const getCity = async city => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`; //вопросительный знак, это означает, что мы добавляем параметры запроса

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0]; //[0] - что бы отображало первый найденный вариант

};

