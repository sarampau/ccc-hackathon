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
            className='slot'
            key={slot.team.id}
            onClick={ () => { props.handleTeam(slot.team.id);
              props.handleCoach(slot.team.id);
              props.handleTeamInfo(slot.team.id)
            }}
          >
            <td className='team-name'>{place++}<img src={slot.team.logo} className='logo'/>{slot.team.name}</td>
            <td className='team-stats'>{slot.all.played}</td>
            <td className='team-stats'>{slot.all.win}</td>
            <td className='team-stats'>{slot.all.draw}</td>
            <td className='team-stats'>{slot.all.lose}</td>
            <td className='team-stats'>{slot.all.goals.for}-{slot.all.goals.against}</td>
            <td className='team-stats'>{slot.goalsDiff}</td>
            <td className='team-stats'>{slot.points}</td>
          </tr>
        ))
      }
    </tbody>
  )
}

export default Table;
