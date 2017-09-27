class App extends React.Component {
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
          searchBar: ''
        });
      } else {
        this.setState({
          summonerFound: true,
          accountInfo: data.accountInfo,
          soloQ: data.soloQ,
          flexQ: data.flexQ,
          searchBar: ''
        });
      }
    })
  }

  searchMatches() {
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
          matchList: data.matches
        });
      }
    })
  }

  hideMatches() {
    this.setState({
      matchesFound: false
    });
  }

  nameChange(name) {
    this.setState({searchBar: name});
  }

  render() {
    return (
    <div>
      <div>
        <Search searchBar={this.state.searchBar} searchName={this.searchName.bind(this)} nameChange={this.nameChange.bind(this)} />
      </div>
      <div>
        <Summoner summonerFound={this.state.summonerFound} accountInfo={this.state.accountInfo} soloQ={this.state.soloQ} flexQ={this.state.flexQ} />
      </div>
      <div>
        <MatchList matchesFound={this.state.matchesFound} searchMatches={this.searchMatches.bind(this)} hideMatches={this.hideMatches.bind(this)} accountInfo={this.state.accountInfo} />
      </div>
    </div>
    )
  }
}

window.App = App;