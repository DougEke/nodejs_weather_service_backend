# nodejs_weather_service_backend - overview

This repository replicates how the back end was used for the spring boot application. It's work in progress with the idea of:

a: Receive a Rest API request from a React front end (this bit is not yet oimplemented, although the function is there).
b: Calls the Controller.getCurrentWeatherDataFromApi("city name")
c: The Controller.getCurrentWeatherDataFromApi("city name") then does a RestAPI call to OpenWeatherApi with the city name.
    -> this will return a json string with the weather data
d: Back in the server the returned data will then pass this back to the react frontend (WIP).

At present the returned weather data is displayed to the console, and also to the browser (http://localhost:8000/weather/).
