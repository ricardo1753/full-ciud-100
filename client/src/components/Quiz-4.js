import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

import { quiz } from "../quiz.json";
import Pregunta from "./Pregunta";
import Respuesta from "./Respuesta";

class Quiz extends Component {
  state = {
    quiz: quiz,
    contador: -1,
    answer: false,
    question: false,
  };

  onQuestion = (props) => {
    if (this.state.contador <= quiz.length - 1) {
      this.setState({
        contador: this.state.contador + 1,
        answer: false,
      });
    }
  };

  onAnswer = () => {
    this.setState({
      question: true,
      answer: true,
    });
  };

  onExplica = () => {
    alert(
      "Presione Question para escuchar la pregunta." +
        "Después responda la pregunta en voz alta antes de pulsar Answer." +
        "Púlselo y verifique si su respuesta es correcta!"
    );
  };

  render() {
    const { answer, contador, question, quiz } = this.state;
    console.log("render ", contador);
    return (
      <div>
        <div style={{ color: "blue", fontWeight: 900 }}>section: Quiz 4</div>
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
            fuente={"[ ??? ]"}
            sonido={quiz[contador].sonpreg}
          />
        )}
        {answer && (
          <Respuesta
            fuente={quiz[contador].pregunta}
            fuente={quiz[contador].respuesta}
            sonido={quiz[contador].sonresp}
          />
        )}
      </div>
    );
  }
}
export default Quiz;
