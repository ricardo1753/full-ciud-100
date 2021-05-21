import React, { Component } from "react";
import Prueba2 from "./Prueba2";

class Prueba1 extends Component {
  state = {
    titulo: 'Pepe',
  }
  render() {
    const { titulo } = this.state;
    return (
      <div>
        <div>Padre= {titulo}</div>
        <Prueba2 titulo={ titulo }/>
      </div>
    );
  }
}

export default Prueba1;
