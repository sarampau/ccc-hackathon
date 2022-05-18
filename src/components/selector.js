import React from 'react';

const Selector = (props) => {
  return (
    <select onChange={ e => props.handleSelect(e)}>
      <option value='39'>Premier League - England</option>
      <option value='140'>La Liga - Spain</option>
      <option value='135'>Serie A - Italy</option>
      <option value='78'>Bundesliga - Germany</option>
      <option value='61'>Ligue 1 - France</option>
    </select>
  )
}

export default Selector;
