/**
 * Name: weatherRouter.
 * Description: The weatherRoute module routes the relevant api calls to the relevant controller.
 *              The idea is that if theere are multiple API's that can be called, the code relating
 *              to the relevant api is contained together.
 */

const express = require(`express`);
// const controller = require(`../controller/Controller`);
const propertiesReader = require(`../config/PropertiesReader`);
// const WeatherData = require('../model/WeatherData');
const RestController = require(`../controller/RestController`);
// const ClientResponseException = require("../errors/clientResponseException");

function routes(server) {
    const weatherRouter = express.Router();

    const restController = new RestController();
    
    server.get(`/weather`, async (req, res) => {
        return getCurrentWeatherDataFromApi(propertiesReader.getEmptyLocationString(), res);        
    });

    server.get(`/weather/:location`, async (req, res) => {
        const location = req.params.location;

        return getCurrentWeatherDataFromApi(req.params.location, res);
                  
    }); 

    /**
     * Description: The functions primary role is to retrieve the data from the controller. This reduces a great deal
     *              of duplicated code which would appear in both the above rest api calls through the controller.
     * 
     * @param {*} location is the location of where the weather data is to be retrieved for
     * @param {*} res 
     * @returns 
     */
    const getCurrentWeatherDataFromApi = async (location, res) => {         
        const data = await new RestController().getCurrentWeatherDataFromApi(location);

        const err = JSON.parse(data);

        console.log(`\n[weatherRouter] - data:\n${data}\n`);
       
        // 200: OK.
        // 400: Bad request, server cannot or will not process the request due to something that is perceived to be a client error.
        // 404: Server can't find the page you're trying to access via a hyperlink or typing a URL in the browser.
        if(err.cod == 200) {
            return res.json({data});
        }
        else{
            console.log(`Err code ${err.cod} - [${location}] not found.`);
            // throw new ClientResponseException(err.cod, location);
            return res.send(`${err.cod} - [${location}] not found.`);
        }
    }

    return weatherRouter;
};

module.exports = routes;