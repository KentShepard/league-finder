var MatchList = ({matches}) => (
  <div className="match-list">
  {matches.map((match) =>
    <MatchListEntry key={match.gameId} />
  )}
  </div>
)

window.MatchList = MatchList;