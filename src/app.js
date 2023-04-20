import React, { Component } from 'react';
import axios from 'axios';
import Selector from './components/selector';
import Table from './components/table';
import Team from './components/team';
import Player from './components/player';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      team: [],
      coach: {},
      player: {},
      venue: {},
      playerClicked: false,
      number: 0
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleTeam = this.handleTeam.bind(this);
    this.handleCoach = this.handleCoach.bind(this);
    this.handleTeamInfo = this.handleTeamInfo.bind(this);
    this.handlePlayer = this.handlePlayer.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }

  componentWillMount() {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {season: '2022', league: '39'},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${API_KEY}`
      }
    };
    axios.request(options)
      .then(res => res.data.response[0].league.standings[0])
      .then(table => this.setState({ table }))
      .catch(err => console.log(err))
  }

  handleSelect(e) {
    let month = new Date().getMonth();
    let season = new Date().getFullYear();
    const league = e.target.value;
    if (month <= 6) {
      season--
    }
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {season: `${season}`, league: `${league}`},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${API_KEY}`
      }
    };
    axios.request(options)
      .then(res => res.data.response[0].league.standings[0])
      .then(table => this.setState({ table, team: [], playerClicked: false }))
      .catch(err => console.log(err))
  }

  handleTeam(id) {
    const squad = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
      params: {team: `${id}`},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${API_KEY}`
      }
    };
    axios.request(squad)
    .then(res => res.data.response[0].players)
    .then(team => this.setState({ team, playerClicked: false }))
    .catch(err => console.log(err))
  }

  handleCoach(id) {
    const coach = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/coachs',
      params: {team: `${id}`},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${API_KEY}`
      }
    };
    let i;
    id === 47 || id === 33 || id === 63 || id === 44 ? i = 1
    : id === 42 ? i = 2
    : i = 0
    axios.request(coach)
      .then(res => res.data.response[i])
      .then(coach => this.setState({ coach }))
      .catch(err => console.log(err))
  }

  handleTeamInfo(id) {
    const venue = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
      params: {id: `${id}`},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${API_KEY}`
      }
    };
    axios.request(venue)
      .then(res => res.data.response[0].venue)
      .then(venue => this.setState({ venue }))
      .catch(err => console.log(err))
  }

  handlePlayer(id) {
    const player = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/players',
      params: {id: `${id}`, season: '2021'},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${API_KEY}`
      }
    };
    axios.request(player)
      .then(res => res.data.response[0])
      .then(player => this.setState({ player, playerClicked: !this.state.playerClicked }))
      .catch(err => console.log(err))
  }

  handleNumber(number) {
    this.setState({
      number
    })
  }

  handleReturn() {
    this.setState({
      playerClicked: !this.state.playerClicked
    })
  }
  
  render() {
    return (
      <div className='container'>
        <h1>Futbolero</h1>
        <Selector
          handleSelect={ this.handleSelect }
        />
        <div className='content'>
          <Table
            table={ this.state.table }
            handleTeam={ this.handleTeam }
            handleCoach={ this.handleCoach }
            handleTeamInfo={ this.handleTeamInfo }
          />
          {
            !this.state.playerClicked ?
              <Team
                team={ this.state.team }
                coach={ this.state.coach }
                venue={ this.state.venue }
                handlePlayer={ this.handlePlayer }
                handleNumber={ this.handleNumber }
              />
            :
              <Player
                player={ this.state.player }
                number={ this.state.number }
                handleReturn={ this.handleReturn }
              />
          }
        </div>
      </div>
    )
  }
}

export default App;
