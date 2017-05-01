import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Map from './components/Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hola Mundo
        <Map />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
