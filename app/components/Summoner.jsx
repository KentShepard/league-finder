import React from 'react';

var Summoner = ({summonerFound, accountInfo, soloQ, flexQ}) => {
  var round = function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }
  if (summonerFound && accountInfo.name) {
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
            <td>{soloQ !== undefined ? `${soloQ.wins}-${soloQ.losses} (${round((soloQ.wins / (soloQ.wins + soloQ.losses) * 100), 2)}%)` : 'Unranked'}</td>
            <td>{flexQ !== undefined ? `${flexQ.tier} ${flexQ.rank}` : 'Unranked'}</td>
            <td>{flexQ !== undefined ? `${flexQ.wins}-${flexQ.losses} (${round((flexQ.wins / (flexQ.wins + flexQ.losses) * 100), 2)}%)` : 'Unranked'}</td>
          </tr>
        </tbody>
      </table>
    )
  } else if (!summonerFound) {
    return (
      <div>There was an error! Make sure the summoner name is spelled correctly.</div>
    )
  } else {
    return (
      <div></div>
    )
  }
};

export default Summoner;