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
      endpoint: 'summoner'
    }

    serverRequest(object, (err, data) => {
      if (err) {
        this.setState({searchBar: ''});
      } else {
        this.setState({
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
        <Summoner accountInfo={this.state.accountInfo} soloQ={this.state.soloQ} flexQ={this.state.flexQ} />
      </div>
      <div>

      </div>
    </div>
    )
  }
}

window.App = App;