class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchList: window.exampleMatchData.matches,
      name: ''
    };
  }

  searchName() {
    var object = {
      name: this.state.name,
    }

    serverRequest(object, (data) => {
      console.log(data);
    })
  }

  nameChange(name) {
    this.state.name = name;
  }

  render() {
    return (
    <div>
      <div>
        <Search searchName={this.searchName.bind(this)} nameChange={this.nameChange.bind(this)}/>
      </div>
      <div>

      </div>
    </div>
    )
  }
}

window.App = App;