import React from 'react';

const Team = (props) => {
  const team = props.team;
  const coach = props.coach;
  const venue = props.venue;
  return (
    !team.length ?
    <div className='instruction'>
      <h2>Click on a team to see their squad</h2>
    </div>
    :
    <div className='team-container'>
      <div className='team-info'>
        <h3 className='special-h3'>Team</h3>
        <div className='team-section'>
          <img src={coach.team.logo} className='team-logo'/>
          <p>{coach.team.name}</p>
        </div>
        <h3>Manager</h3>
        <div className='coach-box'>
        <img src={coach.photo} className='coach-img'/>
          <div className='coach-info'>
            <p>{coach.firstname} {coach.lastname}</p>
            <p>{coach.birth.place}, {coach.birth.country}</p>
            <p>Age: {coach.age}</p>
          </div>
        </div>
        <h3>Venue</h3>
        <div className='venue-container'>
          <img
            src={venue.image}
            onError={(e) => {e.target.onerror = null; e.target.src='https://ronaldo.com/wp-content/uploads/2020/01/GettyImages-114663907.jpg'}}
            className='venue-img'/>
          <p>Name: {venue.name}</p>
          <p>City: {venue.city}</p>
          <p>Capacity: {(venue.capacity.toLocaleString('en-US'))}</p>
        </div>
      </div>
      <div className='squad-container'>
        <h3 className='special-h3'>Squad</h3>
        <div className='squad'>
          <h3>Keepers</h3>
          {
            team.map(player => (
              player.position === 'Goalkeeper' &&
                <div
                  className='player-list-item'
                  onClick={ () => {props.handlePlayer(player.id)
                    props.handleNumber(player.number)}}>
                  <img src={player.photo}/>
                  <p>{player.name}</p>
                  <p style={{fontWeight: 400, marginRight: '2px'}}>#</p>
                  <p>{player.number}</p>
                  <p style={{fontWeight: 400, marginRight: '3px'}}>Age: </p>
                  <p>{player.age}</p>
                </div>
            ))
          }
          <h3>Defenders</h3>
          {
            team.map(player => (
              player.position === 'Defender' &&
                <div
                  className='player-list-item'
                  onClick={ () => {props.handlePlayer(player.id);
                    props.handleNumber(player.number)}}>
                  <img src={player.photo}/>
                  <p>{player.name}</p>
                  <p style={{fontWeight: 400, marginRight: '2px'}}>#</p>
                  <p>{player.number}</p>
                  <p style={{fontWeight: 400, marginRight: '3px'}}>Age: </p>
                  <p>{player.age}</p>
                </div>
            ))
          }
          <h3>Midfielders</h3>
          {
            team.map(player => (
              player.position === 'Midfielder' &&
                <div
                  className='player-list-item'
                  onClick={ () => {props.handlePlayer(player.id);
                    props.handleNumber(player.number)}}>
                  <img src={player.photo}/>
                  <p>{player.name}</p>
                  <p style={{fontWeight: 400, marginRight: '2px'}}>#</p>
                  <p>{player.number}</p>
                  <p style={{fontWeight: 400, marginRight: '3px'}}>Age: </p>
                  <p>{player.age}</p>
                </div>
            ))
          }
          <h3>Attackers</h3>
          {
            team.map(player => (
              player.position === 'Attacker' &&
                <div
                  className='player-list-item'
                  onClick={ () => {props.handlePlayer(player.id);
                    props.handleNumber(player.number)}}>
                  <img src={player.photo}/>
                  <p>{player.name}</p>
                  <p style={{fontWeight: 400, marginRight: '2px'}}>#</p>
                  <p>{player.number}</p>
                  <p style={{fontWeight: 400, marginRight: '3px'}}>Age: </p>
                  <p>{player.age}</p>
                </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Team;
