const WeatherData = require("../model/WeatherData");

class JsonParser{
    constructor(){}

    jsonToWeatherDataParser(data) {
        const weatherData = new WeatherData();

        weatherData.name = JSON.stringify(data.name);
        weatherData.country = JSON.stringify(data.sys.country);
        weatherData.lon = data.coord.lon;
        weatherData.lat = data.coord.lat;
        weatherData.temp = Math.floor(data.main.temp - 273.15);
        weatherData.maxTemp = Math.floor(data.main.temp_max - 273.15);
        weatherData.minTemp = Math.floor(data.main.temp_min);
        weatherData.feelsLike = Math.floor(data.main.feels_like);
        weatherData.windSpeed = `${Math.floor((data.wind.speed * 18) /5)} kph`;
        weatherData.windDirect = `${Math.floor(data.wind.deg)} deg`;

        // // Debug:
        // this.printWeatherData(weatherData);

        return weatherData;
    }

    weatherDataToJsonParser(weatherData){
        console.log(`weatherDataToJsonParser: ${JSON.stringify(weatherData)}`);
        return JSON.parse(weatherData);
    }

    printWeatherData(weatherData){
        console.log(`===> Debug [JsonParser.printWeatherData()]`)
        console.log(`[JsonParser] - weatherData.name       : ${weatherData.name}`);        
        console.log(`[JsonParser] - weatherData.sys.country: ${weatherData.country}`);
        console.log(`[JsonParser] - weatherData.name       : ${weatherData.lon}`);        
        console.log(`[JsonParser] - weatherData.sys.country: ${weatherData.lat}`);
        console.log(`[JsonParser] - weatherData.temp       : ${weatherData.temp}`);        
        console.log(`[JsonParser] - weatherData.maxTemp    : ${weatherData.maxTemp}`);
        console.log(`[JsonParser] - weatherData.minTemp    : ${weatherData.minTemp}`);        
        console.log(`[JsonParser] - weatherData.feelsLike  : ${weatherData.feelsLike}`);
        console.log(`[JsonParser] - weatherData.windSpeed  : ${weatherData.windSpeed}`);        
        console.log(`[JsonParser] - weatherData.windDirect : ${weatherData.windDirect}`);
    }
}

module.exports = JsonParser;