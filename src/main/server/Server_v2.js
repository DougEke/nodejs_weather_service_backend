const express = require("express");
const cors = require("cors");
const cron = require("node-cron");
const server = express();

server.use(cors());
server.use(express.json());

const propertiesReader = require('../utilities/PropertiesReader');
const utilities = require('../utilities/utilities');
const weatherRouter = require(`../router/weatherRouter`)(server);

// Configuration section
const port = propertiesReader.getPort();    // 8000
const hostName = propertiesReader.getServerUrl();

// Start the server.use.apply.
server.listen(port, () => {
    console.log(`\n[${utilities.getDateTime()}] NodeJs service server running on http://${hostName}:${port}\n`);
});

server.use(weatherRouter);

/***
 * ToDo: This is something for the future...
 */
// cron.schedule(`*/10 * * * * *`, () => {
//     console.log(`\nScheduled task running at: ${utilities.getDateTime()}`);
// });
