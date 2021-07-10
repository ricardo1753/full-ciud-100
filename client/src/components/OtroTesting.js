import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MenuTwoTone from "@material-ui/icons/MenuTwoTone";

import { quiz } from "../quiz2.json";

export default class App extends Component {
  state = {
    cont: 0,
  };
 
  // cuenta problemas
  cuentaProblemas = () => {
    this.setState({ cont: this.state.cont + 1 });
    ////debugger
    if (this.state.cont === quiz.length - 1) {
      this.setState({ cont: 0 });
      ////debugger
    }
  };

  //selecciona aleatoramiente 3 respuestas
  generaSerie = (max, min, lazos) => {
    let vez = 0;
    const serie = [];
    while (vez < lazos) {
      let alea = Math.floor(Math.random() * (max - min) + min);
      //debugger;
      if (!serie.includes(alea)) {
        serie.push(alea);
        vez++;
      }
    }
    if (!serie.includes(this.state.cont)) {
      let alea = Math.floor(Math.random() * lazos);
      serie[alea] = this.state.cont;
    }
    return serie;
  };

  render() {
    console.log("largo", quiz.length);
    //const miSecuencia = this.generaSerie(quiz.length, 2, 3)
    const miSecuencia = this.generaSerie(quiz.length , 0, 5);
    return (
      <div>
        <p className="pregunta">
          Problem {this.state.cont + ":-  "} {quiz[this.state.cont].pregunta}
        </p>
        <ul className="respuesta">
          <li>
            - {quiz[miSecuencia[0]].respuesta}
            <br />
          </li>
          <li>
            - {quiz[miSecuencia[1]].respuesta}
            <br />
          </li>
          <li>
            - {quiz[miSecuencia[2]].respuesta}
            <br />
          </li>
          <li>
            - {quiz[miSecuencia[3]].respuesta}
            <br />
          </li>
        </ul>
        {/*<button onClick={this.cuentaProblemas}>Clic</button>*/}
        <div className="nav-bar">
        <Button variant="contained"
          color="primary"
          onClick={this.cuentaProblemas}
        >
          Clic
        </Button>
      </div>
      </div>
    );
  }
}
