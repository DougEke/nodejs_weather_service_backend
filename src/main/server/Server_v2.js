const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
const server = express();

server.use(cors());
server.use(express.json());

const controller = require('../controller/Controller');
const propertiesReader = require('../utilities/PropertiesReader');
const utilities = require('../utilities/utilities');

// Configuration section
const port = propertiesReader.getPort();
const hostName = propertiesReader.getServerUrl();

// Start the server.use.apply.
server.listen(8000, () => {
    console.log(`\n[${utilities.getDateTime()}] NodeJs service server running on http://${hostName}:${port}\n`)
});

server.get(`/weather/`, async (req, res) => {
    let data = await controller.getCurrentWeatherDataFromApi("Kirkby on Bain");

    console.log(`\n===> Debug [server.get()] data: ${JSON.stringify(data)}\n`);

    res.json({data});

    // return res.json(await controller.getCurrentWeatherDataFromApi(`Lincoln`));
});

// cron.schedule(`*/10 * * * * *`, () => {
//     console.log(`\nScheduled task running at: ${utilities.getDateTime()}`);
// });
