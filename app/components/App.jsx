class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchList: window.exampleMatchData.matches,
      name: '',
      currentSummoner: ''
    };
  }

  searchName() {
    var object = {
      name: this.state.name,
    }

    serverRequest(object, (err, data) => {
      if (data.status) {
        // console.log('inside err', err);
        this.setState({currentSummoner: data.status.message});
      } else {
        // var parsed = JSON.parse(data);
        console.log('inside else', data);
        this.setState({currentSummoner: data.name});
      }
    })
  }

  nameChange(name) {
    this.setState({name: name});
  }

  render() {
    return (
    <div>
      <div>
        <Search searchName={this.searchName.bind(this)} nameChange={this.nameChange.bind(this)} />
      </div>
      <div>
        <Summoner summoner={this.state.currentSummoner}/>
      </div>
    </div>
    )
  }
}

window.App = App;