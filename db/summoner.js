var mongoose = require('mongoose');
var db = require('./config');
var Schema = mongoose.Schema;

let summonerSchema = new Schema({
  name: {type: String, required: true},
  accountInfo: {type: Object, required: true},
  soloQ: Object,
  flexQ: Object,
  matchHistory: Array,
}, {timestamps: {createdAt: 'created_at'}});

summonerSchema.plugin(require('mongoose-create-or-update'));

let Summoner = mongoose.model('Summoner', summonerSchema);
module.exports = Summoner;