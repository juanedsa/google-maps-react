import React, { Component } from 'react'
import ReactDOM from 'react-dom'


import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
  render() {

    const location = {
      lat: 0,
      lng: 0
    }


    return (
      <div style={{ height: `600px` , width: `100%`, border: 'solid 1px', background: 'red' }}>
        <Map  />
        <Places />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
