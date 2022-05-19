import React from 'react';

const Table = (props) => {
  const table = props.table;
  let place = 1
  return (
    <tbody className='table'>
      <tr>
        <th>Team</th>
        <th>Played</th>
        <th>Wins</th>
        <th>Draws</th>
        <th>Losses</th>
        <th>+/-</th>
        <th>Diff</th>
        <th>Pts</th>
      </tr>
      {
        table.map(slot => (
          <tr
            onClick={ () => { props.handleTeam(slot.team.id);
              props.handleCoach(slot.team.id);
              props.handleTeamInfo(slot.team.id)
            }}
            key={slot.team.id}
          >
            <td>{place++}<img src={slot.team.logo} className='logo'/>{slot.team.name}</td>
            <td>{slot.all.played}</td>
            <td>{slot.all.win}</td>
            <td>{slot.all.draw}</td>
            <td>{slot.all.lose}</td>
            <td>{slot.all.goals.for}-{slot.all.goals.against}</td>
            <td>{slot.goalsDiff}</td>
            <td>{slot.points}</td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default Table;
