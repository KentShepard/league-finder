class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchList: window.exampleMatchData.matches
    };
  }

  render() {
    return (
    <div>
      <div>
        <Search/>
      </div>
      <div>
        <MatchList matches={this.state.matchList}/>
      </div>
    </div>
    )
  }
}

window.App = App;