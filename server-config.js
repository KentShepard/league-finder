var express = require('express');
var fs = require('fs');
var Promise = require('bluebird');
var readFile = Promise.promisify(fs.readFile);
var api_key = require('./app/config/riot');
var request = require('request')

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/summoner', function(req, res) {
  var summonerName = req.query.name;
  var url = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${api_key}`
  request(url, function(error, response, body) {
    res.json(body);
    res.end();
  });
});

module.exports = app;