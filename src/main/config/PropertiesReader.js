const PropertiesReader = require('properties-reader');

var properties = PropertiesReader('../properties/application.properties');

exports.getPort = () => {
    return properties.get("PORT");
};

exports.getServerUrl = () => {
    return properties.get("SERVER_URL");
};

exports.getOpenWeatherApiKey = () => {
    return properties.get("OPEN_WEATHER_API_KEY");
};

exports.getOpenWeatherApi = () => {
    return properties.get("OPEN_WEATHER_API");
};

exports.getRestApi = () => {
    return properties.get("REST_API");
};

exports.getEmptyLocationString = () => {
    return properties.get("EMPTY_LOCATION");
}