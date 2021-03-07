const dotenv = require('dotenv');
dotenv.config();
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const API_KEY = process.env.API_KEY;

const fetch = require('node-fetch');
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');

//Require Express
const { response } = require('express');

const app = express();

/* Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Cors */
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));


// Designated port for incoming requests
const port =8081;
app.listen(port, function () {
    console.log('Example app listening on port 8081!')
});

//Get route
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

//Post route
app.post('/analysis', async (req, res) => {
    console.log(req.body);

    const response = await fetch(`${baseURL}${API_KEY}&of=json&lang=en&txt=${req.body.txt}&model=general&url=${req.body.url}`);
    try {
        const data = await response.json();
        res.send(data)
        res.json()
    } catch(error) {
        console.log('error', error);
    }

});
