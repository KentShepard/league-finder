var MatchListEntry = ({date, queue, champion, role, lane}) => (
  <tbody>
    <tr>
      <td>{date}</td>
      <td>{window.queueTypes[queue]}</td>
      <td>Victory</td>
      <td>{champion}</td>
      <td>{window.roles[role]}</td>
      <td>{lane.charAt(0).toUpperCase() + lane.slice(1)}</td>
      <td>1/0/21</td>
    </tr>
  </tbody>
);

window.MatchListEntry = MatchListEntry;