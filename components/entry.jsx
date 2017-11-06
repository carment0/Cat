// React
import React from 'react';
import ReactDOM from 'react-dom';

import Main from '../genetic_algorithm/main'
// Components

class Root extends React.Component {
  render() {
    return(
      <div>
        <button onClick={function() {new Main();}}>start</button>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
