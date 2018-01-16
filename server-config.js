var express = require('express');
// var fs = require('fs');
// var Promise = require('bluebird');
// var readFile = Promise.promisify(fs.readFile);
var api_key = require('./app/config/riot');
var request = require('request')

var app = express();

var Summoner = require('./db/summoner.js')

app.use(express.static(__dirname + '/public'));
app.use('/summoner/:name', express.static(__dirname + '/public'));

app.get('/summoner', function (req, res) {
  var summonerName = req.query.name.toLowerCase();
  Summoner.findOne({ name: summonerName }).then(summoner => {
    if (summoner) {
      res.send(summoner);
    } else {
      findProfile(summonerName, (profile, err) => {
        if (err) {
          console.log(err);
          res.status(400).send('Error finding summoner');
        } else {
          res.send(profile);
        }
      });
    };
  });
});

app.get('/update', function (req, res) {
  var summonerName = req.query.name.toLowerCase();
  findProfile(summonerName, (profile, err) => {
    if (err) {
      console.log(err);
      res.status(400).send('Error updating profile');
    } else {
      res.send(profile);
    }
  });
});

var findProfile = function (summonerName, callback) {
  var summonerUrl = `https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${summonerName}?api_key=${api_key}`

  request(summonerUrl, function (error, response, body) {
    var parsedInfo = JSON.parse(body);
    if (parsedInfo.name) {
      searchedSummoner = {};
      searchedSummoner.accountInfo = parsedInfo;
      searchedSummoner.name = summonerName;
      var rankedUrl = `https://na1.api.riotgames.com/lol/league/v3/positions/by-summoner/${parsedInfo.id}?api_key=${api_key}`

      request(rankedUrl, function (error, response, body) {
        var parsedRanked = JSON.parse(body);
        if (parsedRanked.length) {
          parsedRanked.forEach((rankedQ) => {
            if (rankedQ.queueType === 'RANKED_SOLO_5x5') {
              searchedSummoner.soloQ = rankedQ;
            } else if (rankedQ.queueType === 'RANKED_FLEX_SR') {
              searchedSummoner.flexQ = rankedQ;
            }
          })

          findMatches(searchedSummoner.name, searchedSummoner.accountInfo.accountId, matchList => {
            searchedSummoner.matchList = matchList;
            Summoner.createOrUpdate({ name: summonerName }, searchedSummoner).then(data => {
              callback(data);
            }).catch(err => {
              console.log(err);
            });
          });

        }
      });
    } else {
      callback(null, err);
    }
  })
}

var findMatches = function (name, accountId, callback) {
  var summonerName = name.toLowerCase();
  var matchesUrl = `https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${accountId}/recent?api_key=${api_key}`;
  request(matchesUrl, function (error, response, body) {
    var parsedMatches = JSON.parse(body);
    var results = [];
    for (var i = 0; i < 10; i++) {
      results.push(parsedMatches.matches[i]);
    }

    for (var i = 0; i < results.length; i++) {
      var added = 0;
      (function (count) {

        var gameId = results[count].gameId;
        var champId = Number(results[count].champion);
        var matchUrl = `https://na1.api.riotgames.com/lol/match/v3/matches/${gameId}?api_key=${api_key}`

        request(matchUrl, function (error, response, body) {
          var parsed = JSON.parse(body);
          var players = parsed.participants;
          var playerStats;
          var stats = {};

          var findPlayer = function (id) {
            for (var i = 0; i < players.length; i++) {
              if (players[i].championId === id) {
                return players[i];
              }
            }
          }

          var player = findPlayer(champId)

          for (var i = 0; i < parsed.teams.length; i++) {
            if (player.teamId === parsed.teams[i].teamId) {
              stats.result = parsed.teams[i].win;
            }
          }

          stats.kills = player.stats.kills;
          stats.deaths = player.stats.deaths;
          stats.assists = player.stats.assists;
          results[count].stats = stats;
          added++;
          if (added === results.length) {
            callback(results);
          }
        })
      }(i));
    }
  });
};

module.exports = app;