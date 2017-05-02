import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Map from './components/Map'
import Places from './components/Places'
import Title from './components/Title'

class App extends Component {
  render() {

    const centerMap = {
      lat: 4.6786374,
      lng: -74.0576714,
    }

    return (

        <div style={{ margin: `0 auto`, height: `600px` , width: `800px` }}>
          <Title />
          <Map center={centerMap} />
          <Places />
        </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
