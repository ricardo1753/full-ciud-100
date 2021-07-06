import React, { Component } from "react";

class Prueba1 extends Component {
  state = {
    estudios: "secundario",
  };

  cambioEstudios = (e) => {
    this.setState({ estudios: e.target.value });
  };

  render() {
    return (
      <div>
        <p>
          <input
            type="radio"
            value="primario"
            checked={this.state.estudios === "primario"}
            onChange={this.cambioEstudios.bind(this)}
          />
          Primario
        </p>
        <p>
          <input
            type="radio"
            value="secundario"
            checked={this.state.estudios === "secundario"}
            onChange={this.cambioEstudios.bind(this)}
          />
          Secundario
        </p>
        <p>
          <input
            type="radio"
            value="universitario"
            checked={this.state.estudios === "universitario"}
            onChange={this.cambioEstudios.bind(this)}
          />
          Universitario
        </p>
      </div>
    );
  }
}


export default Prueba1;
