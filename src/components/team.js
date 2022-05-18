import React from 'react';

const Team = (props) => {
  const team = props.team;
  return (
    !team.length ?
    <div>
      <h2>Click on a team to see their squad</h2>
    </div>
    :
    <div>
      <h3>Keepers</h3>
      {
        team.map(player => (
          player.position === 'Goalkeeper' &&
            <div className='player-list-item'>
              <img src={player.photo}/>
              <p>{player.name}</p>
              <p>Age: {player.age}</p>
              <p>Number: {player.number}</p>
            </div>
        ))
      }
      <h3>Defenders</h3>
      {
        team.map(player => (
          player.position === 'Defender' &&
            <div className='player-list-item'>
              <img src={player.photo}/>
              <p>{player.name}</p>
              <p>Age: {player.age}</p>
              <p>Number: {player.number}</p>
            </div>
        ))
      }
      <h3>Midfielders</h3>
      {
        team.map(player => (
          player.position === 'Midfielder' &&
            <div className='player-list-item'>
              <img src={player.photo}/>
              <p>{player.name}</p>
              <p>Age: {player.age}</p>
              <p>Number: {player.number}</p>
            </div>
        ))
      }
      <h3>Attackers</h3>
      {
        team.map(player => (
          player.position === 'Attacker' &&
            <div className='player-list-item'>
              <img src={player.photo}/>
              <p>{player.name}</p>
              <p>Age: {player.age}</p>
              <p>Number: {player.number}</p>
            </div>
        ))
      }
    </div>
  )
}

export default Team;
