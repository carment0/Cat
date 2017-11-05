// React
import React from 'react';
import ReactDOM from 'react-dom';

// Components


class Root extends React.Component {
  render() {
    return(
      <div>
        is the root page
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
