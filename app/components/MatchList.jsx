var MatchList = ({matchesFound, searchMatchHistory, matchList, searchMatch, hideMatches, champFinder, accountInfo}) => {
  if (matchesFound) {
    return(
      <div>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={hideMatches}>Hide Match History</button>
        </span>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>Queue Type</th>
              <th>Win/Loss</th>
              <th>Champion Played</th>
              <th>Role</th>
              <th>Lane</th>
              <th>K/D/A</th>
            </tr>
          </thead>
          {matchList.map((match) => {
            searchMatch(match.gameId)
              return (
                <MatchListEntry key={match.timestamp} champion={champFinder(match.champion)} role={match.role} lane={match.lane.toLowerCase()}/>
              )
            })
          }
        </table>
      </div>
    )
  } else if (accountInfo.name) {
    return (
      <div>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={searchMatchHistory}>View Match History</button>
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