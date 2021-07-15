import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

import { datos } from "../datos.json";
import Pregunta from "./Pregunta";
import Respuesta from "./Respuesta";

class Quiz extends Component {
  state = {
    datos: datos,
    contador: -1,
    answer: false,
    question: false,
  };

  onQuestion = (props) => {
    if (this.state.contador <= datos.length - 1) {
      this.setState({
        contador: this.state.contador + 1,
        question: true,
        answer: false,
      });
    }
  };

  onAnswer = () => {
    this.setState({
      answer: true,
    });
  };

  onExplica = () => {
    alert(
      "Presione Question para leer y escuchar la pregunta." +
        "Después responda la pregunta en voz alta antes de pulsar Answer." +
        "Púlselo y verifique si su respuesta es correcta!"
    );
  };

  render() {
    const { answer, contador, question, datos } = this.state;
    console.log("render ", contador);

    return (
      <div className="container">
        <div style={{ color: "blue", fontWeight: 900 }}>
          section: Recognition
        </div>
        <div className="nav-bar">
          <Button
            variant="contained"
            color="secondary"
            onClick={this.onExplica}
          >
            ?
          </Button>
          <Button variant="contained" color="primary" onClick={this.onQuestion}>
            Question
          </Button>
          <Button variant="contained" color="primary" onClick={this.onAnswer}>
            Answer
            <VolumeUpIcon style={{ marginRight: "1px" }} />
          </Button>
        </div>
        {console.log("dime ", contador)}
        {question && (
          <Pregunta
            fuente={datos[contador].pregunta}
            sonido={datos[contador].sonpreg}
          />
        )}
        {answer && (
          <Respuesta
            fuente={datos[contador].respuesta}
            sonido={datos[contador].sonresp}
          />
        )}
      </div>
    );
  }
}
export default Quiz;
