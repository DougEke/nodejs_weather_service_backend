# nodejs_weather_service_backend

**1: Overview**
This repository replicates how the back end was used for the spring boot application. It's work in progress with the idea of:

    a: Receive a Rest API request from a React front end (this bit is not yet oimplemented, although the function is there).
    b: Calls the Controller.getCurrentWeatherDataFromApi("city name")
    c: The Controller.getCurrentWeatherDataFromApi("city name") then does a RestAPI call to OpenWeatherApi with the city name.
        -> this will return a json string with the weather data
    d: Back in the server the returned data will then pass this back to the react frontend (WIP).

At present the returned weather data is displayed to the console, and also to the browser (http://localhost:8000/weather/).

**2: File information**

2a: application.properties

    This holds the required configuration properties.
        -> PORT = 8000 (port to run on)
        -> SERVER_URL = 127.0.0.1 (url) - this will eventually change to SERVER_URL = http://localhost

**3: Running and stopping the server**

3a: Running the server

    a: Navigate to the server folder.
    b: Within the terminal/dos window/powershell (your choice) run the command:
        -> node server_v2.js
    c: In the browser enter the following url: http://localhost:8000/weather/

3b: Stopping the server

    a: within the terminal/dos window/powershell (your choice) type:
        -> ctrl_c

    
