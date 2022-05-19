import React from 'react';

const Team = (props) => {
  const team = props.team;
  const coach = props.coach;
  const venue = props.venue;
  return (
    !team.length ?
    <div>
      <h2>Click on a team to see their squad</h2>
    </div>
    :
    <div className='team-container'>
      <div className='team-info'>
        <h4>Manager</h4>
        <img src={coach.team.logo} className='team-logo'/>
        <p>{coach.team.name}</p>
        <img src={coach.photo} className='coach-img'/>
        <p>{coach.firstname} {coach.lastname}</p>
        <p>{coach.birth.place} {coach.birth.country}</p>
        <p>Age: {coach.age}</p>
        <h4>Venue</h4>
        <p>Name: {venue.name}</p>
        <p>City: {venue.city}</p>
        <p>Capacity: {(venue.capacity.toLocaleString('en-US'))}</p>
        <img src={venue.image} className='venue-img'/>
      </div>
      <div className='squad'>
        <h3>Keepers</h3>
        {
          team.map(player => (
            player.position === 'Goalkeeper' &&
              <div className='player-list-item' onClick={ () => props.handlePlayer(player.id)}>
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
    </div>
  )
}

export default Team;
