var MatchList = ({accountInfo}) => {
  if (accountInfo.name) {
    return (
      <div>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">View Match History</button>
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