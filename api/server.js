#!/usr/bin/env node

const express = require('express');
var https = require('https');
var fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express()
app.use(bodyParser.json());
app.use(cors())

const ThemesfolderPath = "./Themes/"
const themes =  require(ThemesfolderPath + "listOfThemes.json")

const AssetsfolderPath = "./assets/"

var options = {
    key: fs.readFileSync('./ssl/privkey1.pem'),
    cert: fs.readFileSync('./ssl/cert1.pem'),
};

var server = https.createServer(options, app).listen(5000, function(){
    console.log("Express server listening on port " + 5000);
});

//Api calls:
app.get("/themes", (req, res) => {
    res.json(themes)
})

app.get("/themes/:fileName", (req, res) => {
    res.download(ThemesfolderPath + req.params.fileName, function(err) {
        if(err) {
            console.log(err);
            res.json([{"result": "error", "err": `theme file [${req.params.fileName}] does not exist`}]);
        }
    })
})
app.get("/assets/:assetName", (req, res) => {
    res.download(AssetsfolderPath + req.params.assetName, function(err) {
        if(err) {
            console.log(err);
            res.json([{"result": "error", "err": `asset file [${req.params.assetName}] does not exist`}]);
        }
    })
})