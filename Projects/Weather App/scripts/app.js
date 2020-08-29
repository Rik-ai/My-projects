const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();


const updateUI = (data) => {

    console.log(data);


    // const cityDetails = data.cityDetails;
    // const weather = data.weather;




    //destructure properties
    const { cityDetails, weather } = data;

    //Updating the UI details template

    details.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="m-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    //update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);


    // //Ternary Operator
    // const result = false ? 'value 1' : 'value 2';
    // console.log(result);
    const timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg'; //короткая форма записи кода ниже

    // let timeSrc = null;
    // if (weather.IsDayTime) {
    //     timeSrc = 'img/day.svg';
    // } else {
    //     timeSrc = 'img/night.svg';
    // }
    time.setAttribute('src', timeSrc);


    //remove the d-none class if present

    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }

};


const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather };

};


cityForm.addEventListener('submit', e => {
    //prevent default action
    e.preventDefault();


    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    //set local storage
    localStorage.setItem('city', city);/*И теперь каждый раз, когда пользователь входит в новое местоположение, мы берем это новое местоположение и сохраняем его в локальном хранилище. Таким образом, это всегда будет самое последнее местоположение, в которое пользователи заходили, потому что каждый раз, когда вы вводите новое, оно просто перезаписывает одно и то же свойство того же ключа в локальном хранилище этим самым последним значением.*/
});
//теперь будет запоминать последний выбранный город и при обновлении выдавать его вместо пустого окна
if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
};
