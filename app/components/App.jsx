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
      if (err) {
        this.state.currentSummoner = err.status.message;
      } else {
        var parsed = JSON.parse(data);
        this.state.currentSummoner = parsed.name;
      }
    })
  }

  nameChange(name) {
    this.state.name = name;
  }

  render() {
    return (
    <div>
      <div>
        <Search searchName={this.searchName.bind(this)} nameChange={this.nameChange.bind(this)} />
      </div>
      <div>
      </div>
    </div>
    )
  }
}

window.App = App;