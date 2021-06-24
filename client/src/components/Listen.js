import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

import { datos } from "../datos.json";
import Toca from "../components/Toca";

class Listen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: datos,
      contador: 0,
      btoca: false,
      cartel: "Play",
    };
  }
  onSuena = () => {
    this.setState({ btoca: !this.state.btoca });
    if (this.state.btoca) {
      if (this.state.contador < this.state.data.length) {
        this.setState({ contador: this.state.contador + 1, cartel: "Play" });
      }
    } else {
      this.setState({ cartel: "Statement" });
    }
  };
  render() {
    return (
      <div>
        <div style={{ color: "blue", fontWeight: 900 }}>section: Listening</div>
        <div className="nav-bar">
          <Button variant="contained" color="primary" onClick={this.onSuena}>
            {this.state.cartel === "Play" && (
              <VolumeUpIcon style={{ marginRight: "5px" }} />
            )}
            {this.state.cartel}
          </Button>
        </div>

        <div className="pregunta container">
          {this.state.data[this.state.contador].pregunta}
        </div>
        <div className="respuesta">
          {this.state.data[this.state.contador].respuesta}
        </div>
        {this.state.btoca && (
          <Toca fuente={this.state.data[this.state.contador].sonido} />
        )}
      </div>
    );
  }
}

export default Listen;
