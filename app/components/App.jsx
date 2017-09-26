class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchList: window.exampleMatchData.matches,
      searchBar: 'ArkShepdog',
      accountInfo: {},
      soloQ: {},
      flexQ: {}
    };
  }

  searchName() {
    var object = {
      name: this.state.searchBar,
    }

    serverRequest(object, (err, data) => {
      if (err) {
        this.setState({currentSummoner: ''});
      } else {
        this.setState({
          accountInfo: data.accountInfo,
          soloQ: data.soloQ,
          flexQ: data.flexQ
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
        <Search searchName={this.searchName.bind(this)} nameChange={this.nameChange.bind(this)} />
      </div>
      <div>
        <Summoner accountInfo={this.state.accountInfo} soloQ={this.state.soloQ} flexQ={this.state.flexQ} />
      </div>
    </div>
    )
  }
}

window.App = App;