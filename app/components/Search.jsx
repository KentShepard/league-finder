var Search = ({searchBar, searchName, nameChange, handleEnterKeyPress}) => (
  <div className="search-bar form-inline col-md-4 col-md-offset-4">
    <input className="form-control" type="text" onChange={(e) => nameChange(e.target.value)} placeholder="Summoner name..." value={searchBar} onKeyPress={handleEnterKeyPress}/>
    <button className="btn btn-default" type="button" onClick={searchName}>Search</button>
  </div>
);

window.Search = Search;