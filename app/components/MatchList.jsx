var MatchList = ({matchesFound, searchMatches, hideMatches, accountInfo}) => {
  if (matchesFound) {
    return(
      <div>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={hideMatches}>Hide Match History</button>
        </span>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>Win/Loss</th>
              <th>Champion Played</th>
              <th>K/D/A</th>
            </tr>
          </thead>
          <MatchListEntry />
        </table>
      </div>
    )
  } else if (accountInfo.name) {
    return (
      <div>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={searchMatches}>View Match History</button>
        </span>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
};

window.MatchList = MatchList;