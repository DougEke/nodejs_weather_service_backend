class WeatherData{

    // data is of type json object
    constructor(data) {
        this.data = data;
    }

    setWeatherData(data) {
        this.data = data
    }

    getWeatherData() {
        return this.data;
    }

    // parseData(data) {
    //     this.name = JSON.stringify(data.name);
    //     this.country = JSON.stringify(data.sys.country);
    //     this.lon = data.coord.lon;
    //     this.lat = data.coord.lat;
    //     this.temp = Math.floor(data.main.temp - 273.15);
    //     this.maxTemp = Math.floor(data.main.temp_max - 273.15);
    //     this.minTemp = Math.floor(data.main.temp_min);
    //     this.feelsLike = Math.floor(data.main.feels_like);
    //     this.windSpeed = `${Math.floor((data.wind.speed * 18) /5)} kph`;
    //     this.windDirect = `${Math.floor(data.wind.deg)} deg`;
    // }

    // getName() {
    //     return this.name;
    // }
}

module.exports = WeatherData;