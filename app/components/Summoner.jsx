var Summoner = ({accountInfo, soloQ, flexQ}) => (
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
        <td>{`${soloQ.tier} ${soloQ.rank}`}</td>
        <td>{`${soloQ.wins}-${soloQ.losses} (${(soloQ.wins / (soloQ.wins + soloQ.losses)).toFixed(4) * 100}%)`}</td>
        <td>{`${flexQ.tier} ${flexQ.rank}`}</td>
        <td>{`${flexQ.wins}-${flexQ.losses} (${(flexQ.wins / (flexQ.wins + flexQ.losses)).toFixed(4) * 100}%)`}</td>
      </tr>
    </tbody>
  </table>
);

window.Summoner = Summoner;