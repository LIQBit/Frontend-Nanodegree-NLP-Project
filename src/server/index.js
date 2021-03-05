const dotenv = require('dotenv');
dotenv.config();
const fetch = require('node-fetch');
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');
const { response } = require('express');
//var myapi = new meaningCloud ({
    //application_key: process.env.API_KEY

//});

const app = express();

/* Middleware */
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Cors */
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
});

app.post('/analysis', function (req, res) {
    const API_KEY = process.env.API_KEY;
    const articleUrl = req.body.articleUrl;
    const baseURL = "https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=en&model=general&url=${articleUrl}";

    fetch(baseURL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/JSON",
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        console.log("Meaningcloud data", data);
        res.send({
            score_tag: data.score_tag,
            agreement: data.agreement,
        })

    })

});