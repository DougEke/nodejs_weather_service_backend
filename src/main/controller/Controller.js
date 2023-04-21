const fetch = require('node-fetch');
const propertiesReader = require('../utilities/PropertiesReader');

let weatherData = "";

exports.getCurrentWeatherData = async (num) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
    .then(res => res.json())
    .then(data => setData(data));

    return weatherData;
};

exports.getCurrentWeatherDataFromApi = async (city) => {
    // Example url: "https://api.openweathermap.org/data/2.5/weather?q=$Lincoln&appid=f17a2fb25fcbb581fbdc91627d0afb28"
    city = "Kirkby on Bain";
    var jsonObject = null;

    let openWeatherApiUrl = `${propertiesReader.getOpenWeatherApi()}${city}&appid=${propertiesReader.getOpenWeatherApiKey()}`;
    
    await fetch(openWeatherApiUrl)
    .then(res => res.json())
    .then(data => setData(JSON.stringify(data)));

    return weatherData;
};

const setData = (data) => {

    weatherData = data;
};