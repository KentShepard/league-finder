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
      query: this.state.name,
    }
    console.log(object);
    // serverRequest(object, (data) => {
    //   console.log(data);
    // })
  }

  nameChange(name) {
    this.state.name = name;
    console.log(this.state.name);
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