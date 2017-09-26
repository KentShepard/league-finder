var Search = ({searchName, nameChange}) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={(e) => nameChange(e.target.value)} placeholder="Summoner name..."/>
    <span className="input-group-btn">
      <button className="btn btn-default" type="button" onClick={searchName}>Search</button>
    </span>
  </div>
);

window.Search = Search;