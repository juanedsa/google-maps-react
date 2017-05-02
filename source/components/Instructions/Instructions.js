import React, { Component } from 'react';

class Instructions extends Component {
  render() {
    return (
      <div className="container">
        <h2>Instrucciones</h2>
        <ol>
          <li>Ingrese la dirección de Origen</li>
          <li>Ingrese la dirección de destino</li>
        </ol>
      </div>
    );
  }
}

export default Instructions
