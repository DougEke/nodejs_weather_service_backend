
const APIConnection = require('../connection/APIConnection');
const WeatherData = require('../model/WeatherData');
const JsonParser = require(`../parser/JsonParser`);

class RestController{
    constructor(){
        this.apiConnection = new APIConnection();
        this.jsonParser = new JsonParser();
    }

    getCurrentWeatherDataFromApi = async(city) => {
        const data = await this.apiConnection.getCurrentWeatherDataFromApi(city);

        // const d = JSON.parse(data);
        // const weatherData = new WeatherData(d);
        const weatherData = this.jsonParser.jsonToWeatherDataParser(JSON.parse(data));

        // const val = this.jsonParser.weatherDataToJsonParser(weatherData);

        // /**
        //  * Debug....
        //  */
        // console.log(`weatherData.name       : ${weatherData.name}`);        
        // console.log(`weatherData.country    : ${weatherData.country}`);
        // console.log(`weatherData.lon        : ${weatherData.lon}`);        
        // console.log(`weatherData.lat        : ${weatherData.lat}`);
        // console.log(`weatherData.temp       : ${weatherData.temp}`);        
        // console.log(`weatherData.maxTemp    : ${weatherData.maxTemp}`);
        // console.log(`weatherData.minTemp    : ${weatherData.minTemp}`);        
        // console.log(`weatherData.feelsLike  : ${weatherData.feelsLike}`);
        // console.log(`weatherData.windSpeed  : ${weatherData.windSpeed}`);        
        // console.log(`weatherData.windDirect : ${weatherData.windDirect}`);
        // /**************************************************************** */

        return data;
    };
}

module.exports = RestController;