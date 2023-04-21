const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');
const app = express();

const controller = require('../controller/Controller');
const propertiesReader = require('../config/PropertiesReader');

app.use(cors);
app.use(express.json);

let http = require('http');
// let url = require('url');
// let events = require('events');

let port = 3000;
let hostName = '127.0.0.1';

let svr = http.createServer((req, res) => {
    
});

svr.listen(port, hostName, () => {
    console.log(`NodeJs service server running on http://${hostName}:${port}`);
});

const getPost = (num) => {
    controller.getCurrentWeatherData(num);
};

getProperties = () => {
    console.log(propertiesReader.getPort());
};

getProperties();

getPost(1);

// app.get(`/message/${city}`, (req, res) => {
//     res.json({message});
// })