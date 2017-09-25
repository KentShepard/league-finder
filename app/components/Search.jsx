var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" placeholder="Summoner name..."/>
    <span className="input-group-btn">
      <button className="btn btn-default" type="button">Search</button>
    </span>
  </div>
);

window.Search = Search;