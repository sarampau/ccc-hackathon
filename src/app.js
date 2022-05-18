import React, { Component } from 'react';
import axios from 'axios';
import Table from './components/table';
import Selector from './components/selector';
import Team from './components/team';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
      team: []
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleTeam = this.handleTeam.bind(this);
  }

  componentWillMount() {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {season: '2021', league: '39'},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '5GDE8ZhsNemshaCh0gsYbwuLVcWvp1gclVcjsn7iri72an2x9l'
      }
    };
    axios.request(options)
      .then(res => res.data.response[0].league.standings[0])
      .then(table => this.setState({ table }))
      .catch(err => console.log(err))
  }

  handleSelect(e) {
    const league = e.target.value;
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {season: '2021', league: `${league}`},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '5GDE8ZhsNemshaCh0gsYbwuLVcWvp1gclVcjsn7iri72an2x9l'
      }
    };
    axios.request(options)
      .then(res => res.data.response[0].league.standings[0])
      .then(table => this.setState({ table }))
      .catch(err => console.log(err))
  }

  handleTeam(id) {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/players/squads',
      params: {team: `${id}`},
      headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '5GDE8ZhsNemshaCh0gsYbwuLVcWvp1gclVcjsn7iri72an2x9l'
      }
    };
    axios.request(options)
    .then(res => res.data.response[0].players)
    .then(team => this.setState({ team }))
    .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className='container'>
        <h1>Football Table</h1>
        <Selector
          handleSelect={ this.handleSelect }
        />
        <div className='content'>
          <Table
            table={ this.state.table }
            handleTeam={ this.handleTeam }
          />
          <Team
            team={ this.state.team }
          />
        </div>
      </div>
    )
  }
}


export default App;
