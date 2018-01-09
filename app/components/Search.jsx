import React from 'react';
import { Link } from 'react-router-dom';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-bar form-inline row justify-content-md-center">
        <input className="form-control search-bar" type="text" onChange={(e) => this.props.nameChange(e.target.value)} placeholder="Summoner name..." value={this.props.searchBar} onKeyPress={this.props.handleEnterKeyPress} />
        <button className="btn btn-outline-primary" type="button" onClick={this.props.searchName}><Link to={`/summoner/${this.props.searchBar}`}>Search</Link></button>
      </div>
    )
  }
}

// var Search = ({ searchBar, searchName, nameChange, handleEnterKeyPress }) => (
//   <div className="search-bar form-inline row justify-content-md-center">
//     <input className="form-control search-bar" type="text" onChange={(e) => nameChange(e.target.value)} placeholder="Summoner name..." value={searchBar} onKeyPress={handleEnterKeyPress} />
//     <button className="btn btn-outline-primary" type="button" onClick={searchName}><Link to={`/summoner/${searchBar}`}>Search</Link></button>
//   </div>
// );

// export default Search;