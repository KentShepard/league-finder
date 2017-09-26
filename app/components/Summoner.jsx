var Summoner = ({accountInfo, soloQ, flexQ}) => {
  if (accountInfo.name) {
    return (
      <table className="table table-striped table-hover ">
        <thead>
          <tr>
            <th>Summoner Name</th>
            <th>Current Level</th>
            <th>Solo Queue Rank</th>
            <th>Solo Queue Record</th>
            <th>Flex Queue Rank</th>
            <th>Flex Queue Record</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{accountInfo.name}</td>
            <td>{accountInfo.summonerLevel}</td>
            <td>{soloQ !== undefined ? `${soloQ.tier} ${soloQ.rank}` : 'Unranked'}</td>
            <td>{soloQ !== undefined ? `${soloQ.wins}-${soloQ.losses} (${(soloQ.wins / (soloQ.wins + soloQ.losses)).toFixed(4) * 100}%)` : 'Unranked'}</td>
            <td>{flexQ !== undefined ? `${flexQ.tier} ${flexQ.rank}` : 'Unranked'}</td>
            <td>{flexQ !== undefined ? `${flexQ.wins}-${flexQ.losses} (${(flexQ.wins / (flexQ.wins + flexQ.losses)).toFixed(4) * 100}%)` : 'Unranked'}</td>
          </tr>
        </tbody>
      </table>
    )
  } else {
    return (
      <div></div>
    )
  }
};

window.Summoner = Summoner;