import React, { Component } from 'react';

class Results extends Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: props.directions.routes[0].legs[0].distance.text,
      duration: props.directions.routes[0].legs[0].duration.text,
      endAddrees: props.directions.routes[0].legs[0].end_address,
      startAddress: props.directions.routes[0].legs[0].start_address
    }
  }
  render() {
    return (
      <div className="container">
        <h2>Resultados</h2>
        <p> Inicio: {this.state.startAddress}</p>
        <p> Destino: {this.state.endAddrees}</p>
        <p> Distancia: {this.state.distance}</p>
        <p> Tiempo: {this.state.duration}</p>
      </div>
    );
  }
}

export default Results
