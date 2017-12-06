import React from 'react';
import MatchListEntry from './MatchListEntry.jsx';

var MatchList = ({matchesFound, searchMatchHistory, matchList, searchMatch, hideMatches, champFinder, accountInfo}) => {
  if (matchesFound) {
    return(
      <div>
        <span className="input-group-btn">
          <button className="btn btn-outline-primary" type="button" onClick={hideMatches}>Hide Match History</button>
        </span>
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>Date Played</th>
              <th>Queue Type</th>
              <th>Match Result</th>
              <th>Champion Played</th>
              <th>Role</th>
              <th>Lane</th>
              <th>K/D/A</th>
            </tr>
          </thead>
          {matchList.map((match) => {
            var date = new Date(match.timestamp).toUTCString().substring(0, 16);
              return (
                <MatchListEntry key={match.timestamp} result={match.stats.result} date={date} queue={match.queue} champion={champFinder(match.champion)} role={match.role} lane={match.lane !== undefined ? match.lane.toLowerCase() : ''} kills={match.stats.kills} deaths={match.stats.deaths} assists={match.stats.assists}/>
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
          <button className="btn btn-outline-primary" type="button" onClick={searchMatchHistory}>View Match History</button>
        </span>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default MatchList;