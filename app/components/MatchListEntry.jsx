var MatchListEntry = ({result, date, queue, champion, role, lane, kills, deaths, assists}) => (
  <tbody>
    <tr>
      <td>{date}</td>
      <td>{window.queueTypes[queue]}</td>
      <td>{result === 'Win' ? 'Victory' : 'Defeat'}</td>
      <td>{champion}</td>
      <td>{window.roles[role]}</td>
      <td>{lane.charAt(0).toUpperCase() + lane.slice(1)}</td>
      <td>{`${kills}/${deaths}/${assists}`}</td>
    </tr>
  </tbody>
);

window.MatchListEntry = MatchListEntry;