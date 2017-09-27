class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchList: window.exampleMatchData.matches,
      searchBar: 'ArkShepdog',
      accountInfo: {},
      soloQ: {},
      flexQ: {},
      summonerFound: true
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
        <MatchList accountInfo={this.state.accountInfo} />
      </div>
    </div>
    )
  }
}

window.App = App;