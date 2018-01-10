import React from 'react';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props);  
  }

  componentWillMount() {
    let summonerName = this.props.location.pathname.split('/')[2];
    this.props.searchName(summonerName);
  }

  handleEnterKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.searchName();
      this.props.history.push(`/summoner/${this.props.searchBar}`);
    }
  }

  render() {
    return (
      <div className="search-bar form-inline row justify-content-md-center">
        <input className="form-control search-bar" type="text" onChange={(e) => this.props.nameChange(e.target.value)} placeholder="Summoner name..." value={this.props.searchBar} onKeyPress={this.handleEnterKeyPress.bind(this)} />
        <button className="btn btn-outline-primary" type="button" onClick={this.props.searchName}><Link to={`/summoner/${this.props.searchBar}`}>Search</Link></button>
      </div>
    )
  }
}