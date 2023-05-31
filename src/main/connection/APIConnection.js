const fetch = require('node-fetch');
const propertiesReader = require('../utilities/PropertiesReader');

class APIConnection{
    constructor(){
        this.weatherData = ""
    }

    getCurrentWeatherDataFromApi = async (city) => {
        const openWeatherApiUrl = 
            `${propertiesReader.getOpenWeatherApi()}${city}&appid=${propertiesReader.getOpenWeatherApiKey()}`;
        
        await fetch(openWeatherApiUrl)
            .then(res => res.json())
            .then(data => this.setWeatherData(JSON.stringify(data)));

            return this.weatherData;
    }

    setWeatherData = ( data ) => {
        this.weatherData = data;
    }
};

module.exports = APIConnection;