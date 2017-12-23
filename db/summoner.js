var mongoose = require('mongoose');
var db = require('./config');
var Schema = mongoose.Schema;

let summonerSchema = new Schema({
  username: {type: String, required: true},
  matchHistory: Array,
}, {timestamps: {createdAt: 'created_at'}});

let Summoner = mongoose.model('Summoner', summonerSchema);
module.exports = Summoner;