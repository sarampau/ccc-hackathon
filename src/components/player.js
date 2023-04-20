import React from 'react';

const Player = (props) => {
  const info = props.player.player;
  const stats = props.player.statistics[0];
  const number = props.number;
  return (
    <div className='keeper-container'>
      <div className='keeper-header'>
        <p
          className='return-button'
          onClick={ () => props.handleReturn() }
        >
          Back to Team
        </p>
        <img src={stats.team.logo}/>
        <p>{stats.team.name}</p>
      </div>
      {
        stats.games.position === 'Goalkeeper' ?
          <div className='player-row'>
            <div className='info'>
              <img src={info.photo}/>
              <p>{info.firstname} {info.lastname}</p>
              <p>Number: {number}</p>
              <p>Age: {info.age}</p>
              <p>Nationality: {info.nationality}</p>
            </div>
            <div className='stats'>
              <p>Appearences: {stats.games.appearences}</p>
              <p>Goals Saved: {stats.goals.saves}</p>
              <p>Goals Conceded: {stats.goals.conceded}</p>
              <p><span style={{color: '#aaaa38'}}>Yellow Cards: </span>{stats.cards.yellow}</p>
              <p><span style={{color: 'red'}}>Red Cards: </span>{stats.cards.red}</p>
            </div>
          </div>
        :
          <div className='player-row'>
            <div className='info'>
              <img src={info.photo}/>
              <p>{info.firstname} {info.lastname}</p>
              <p>Number: {number}</p>
              <p>Age: {info.age}</p>
              <p>Nationality: {info.nationality}</p>
            </div>
            <div className='stats'>
              <p>Appearences: {stats.games.appearences}</p>
              <p>Goals: {stats.goals.total}</p>
              <p>Assists: {stats.goals.assists}</p>
              <p>Pass Accuracy: {stats.passes.accuracy}%</p>
              <p><span style={{color: '#aaaa38'}}>Yellow Cards: </span>{stats.cards.yellow}</p>
              <p><span style={{color: 'red'}}>Red Cards: </span>{stats.cards.red}</p>
            </div>
          </div>
      }
    </div>
  )
}

export default Player; 
