const fetch = require('node-fetch');
const propertiesReader = require('../utilities/PropertiesReader');
const apiConnection = require('../connection/APIConnection');
const WeatherData = require('../model/WeatherData');

exports.getCurrentWeatherDataFromApi = async (city) => {    
    console.log(`[controller] - Location: ${city}`);

    // return apiConnection.getCurrentWeatherDataFromApi(city);

    const data = await apiConnection.getCurrentWeatherDataFromApi(city);

    console.log(`[controller] - data is typeof: ${typeof(data)}`); // returns object
    console.log(`[controller] - data:\n${JSON.stringify(data)}\n`);

    const d = JSON.parse(data);
    const weatherData = new WeatherData(d);

    // console.log(`debug: ${d.cod}`);
    // console.log(`===> Debug [controller.getCurrentWeatherDataFromApi()]`)
    // console.log(`[weatherRouter] - weatherData.name       : ${weatherData.name}`);        
    // console.log(`[weatherRouter] - weatherData.sys.country: ${weatherData.country}`);
    // console.log(`[weatherRouter] - weatherData.name       : ${weatherData.lon}`);        
    // console.log(`[weatherRouter] - weatherData.sys.country: ${weatherData.lat}`);
    // console.log(`[weatherRouter] - weatherData.temp       : ${weatherData.temp}`);        
    // console.log(`[weatherRouter] - weatherData.maxTemp    : ${weatherData.maxTemp}`);
    // console.log(`[weatherRouter] - weatherData.minTemp    : ${weatherData.minTemp}`);        
    // console.log(`[weatherRouter] - weatherData.feelsLike  : ${weatherData.feelsLike}`);
    // console.log(`[weatherRouter] - weatherData.windSpeed  : ${weatherData.windSpeed}`);        
    // console.log(`[weatherRouter] - weatherData.windDirect : ${weatherData.windDirect}`);

    // try{
    //     // const dataAsJson = JSON.parse(data);
    //     console.log(`DEBUG: [data.name]: ${JSON.stringify(data.name)}`);
    //     const weatherData = new WeatherData(data);
    //     console.log(`Debug: [WeatherData]: ${weatherData.getName()}`);
    // }
    // catch(err) {
    //     console.log(`Error parsing JSON string: ${err}`);
    // }

    return data;

    
    
        // // // Populate the CurrentWeatherData class
        // // // First we need to turn the returned json string into a json object before passing over to
        // // // the CurrentWeatherData class.
        // // try {
        // //     const dataAsJson = JSON.parse(data);
        // //     // const currentWeatherData = new CurrentWeatherData(JSON.parse(data));
        // // }
        // // catch(err) {
        // //     console.log("Error parsing JSON string:", err);
        // // }
};