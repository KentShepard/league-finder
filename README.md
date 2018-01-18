> Deployed at [summoner-search.herokuapp.com](https://summoner-search.herokuapp.com/summoner/Dyrus/)

# Summoner Search

Search League of Legend accounts using Riot Games' API.

## Development

### Requirements

- Node package manager
- Node v6+
- MongoDB
- Riot Games' API Key
- see package.json for dependencies

### API Key
Go to https://developer.riotgames.com/ to receive your API Key and store it in a file named `riot.js` on the root directory with the following format:
```javascript
module.exports = 'RGAPI-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';
```

### Installing Dependincies

You must have MongoDB running as a service or in it's own terminal.

From within the root directory:

`npm install`
`npm start`

If you'd like webpack to watch for any changes run `npm run watch` in a separate terminal.


