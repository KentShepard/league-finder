import React from 'react';
import Search from './Search.jsx';
import Summoner from './Summoner.jsx';
import MatchList from './MatchList.jsx';
import serverRequest from '../lib/serverRequest.js';
import champions from '../data/champions.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchList: [],
      searchBar: 'ArkShepdog',
      accountInfo: {},
      soloQ: {},
      flexQ: {},
      summonerFound: true,
      matchesFound: false
    };
  }

  searchName() {
    var object = {
      name: this.state.searchBar,
      endpoint: 'summoner'
    }

    serverRequest(object, (err, data) => {
      if (err) {
        this.setState({
          summonerFound: false,
          matchesFound: false,
          accountInfo: {},
          searchBar: ''
        });
      } else {
        this.setState({
          summonerFound: true,
          accountInfo: data.accountInfo,
          soloQ: data.soloQ,
          flexQ: data.flexQ,
          searchBar: '',
          matchesFound: false
        });
      }
    })
  }

  searchMatchHistory() {
    var object = {
      name: this.state.accountInfo.name,
      endpoint: 'matches'
    }

    serverRequest(object, (err, data) => {
      if (err) {
        this.setState({
          matchesFound: false,
        });
      } else {
        this.setState({
          matchesFound: true,
          matchList: data
        });
      }
    })
  }

  searchMatch(gameId, champId) {
    var object = {
      accountId: this.state.accountInfo.accountId,
      gameId: gameId,
      champId: champId,
      endpoint: 'match'
    }

    serverRequest(object, (err, data) => {
      if (err) {
      } else {
        console.log(data);
      }
    })
  }

  champFinder(champId) {
    var obj = champions.data;
    for (var key in obj) {
      if (obj[key].id === champId) {
        return obj[key].key;
      }
    }
  }

  hideMatches() {
    this.setState({
      matchesFound: false
    });
  }

  nameChange(name) {
    this.setState({searchBar: name});
  }

  handleEnterKeyPress(e) {
    if (e.key === 'Enter') {
      this.searchName();
    }
  }

  render() {
    return (
    <div className="container">
      <div className="container">
        <Search searchBar={this.state.searchBar} searchName={this.searchName.bind(this)} nameChange={this.nameChange.bind(this)} handleEnterKeyPress={this.handleEnterKeyPress.bind(this)}/>
      </div>
      <div>
        <Summoner summonerFound={this.state.summonerFound} accountInfo={this.state.accountInfo} soloQ={this.state.soloQ} flexQ={this.state.flexQ} />
      </div>
      <div>
        <MatchList matchesFound={this.state.matchesFound} searchMatchHistory={this.searchMatchHistory.bind(this)} matchList={this.state.matchList} searchMatch={this.searchMatch.bind(this)} hideMatches={this.hideMatches.bind(this)} champFinder={this.champFinder.bind(this)}accountInfo={this.state.accountInfo} />
      </div>
    </div>
    )
  }
}