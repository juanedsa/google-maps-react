import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Map from './components/Map/Map'
import Instructions from './components/Instructions/Instructions'
import Title from './components/Title/Title'

require('./App.css');

class App extends Component {
  render() {

    const centerMap = {
      lat: 4.6786374,
      lng: -74.0576714,
    }

    return (
        <div className="map-container">
          <Title />
          <Instructions />
          <Map center={centerMap} />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
