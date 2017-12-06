import React from 'react';
import queueTypes from '../data/queueTypes.js';
import roles from '../data/roles.js';

var MatchListEntry = ({result, date, queue, champion, role, lane, kills, deaths, assists}) => (
  <tbody>
    <tr>
      <td>{date}</td>
      <td>{queueTypes[queue]}</td>
      <td>{result === 'Win' ? 'Victory' : 'Defeat'}</td>
      <td><img src={`http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${champion}.png`} alt="" className="champion-image"/>{champion}</td>
      <td>{roles[role]}</td>
      <td>{lane.charAt(0).toUpperCase() + lane.slice(1)}</td>
      <td>{`${kills}/${deaths}/${assists}`}</td>
    </tr>
  </tbody>
);

export default MatchListEntry;