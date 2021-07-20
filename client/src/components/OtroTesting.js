import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import MenuTwoTone from "@material-ui/icons/MenuTwoTone";

import { datos } from "../datos.json";

export default class App extends Component {
  state = {
    cont: 0,
  };

  // cuenta problemas
  cuentaProblemas = () => {
    this.setState({ cont: this.state.cont + 1 });
    ////debugger
    if (this.state.cont === datos.length - 1) {
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
    console.log("largo", datos.length);
    //const miSecuencia = this.generaSerie(datos.length, 2, 3)
    const miSecuencia = this.generaSerie(24, 0, 5);
    return (
      <div>
        <p className="pregunta container">
          Problem {this.state.cont + ":-  "} {datos[this.state.cont].pregunta}
        </p>
        {miSecuencia.map((secuencia, index) => {
          <div key={datos[secuencia].respuesta} className="respuesta">
            <input
              id={datos[secuencia].respuesta}
              type="radio"
              name="respuesta"
              //value={datos[secuencia].respuesta}
              value={datos[secuencia].respuesta}
            />
            {/*<label for={index}>{datos[secuencia].respuesta}</label>*/}
            <label for={datos[secuencia].respuesta}>
              {datos[secuencia].respuesta}
            </label>
          </div>;
          console.log("---", datos[secuencia].respuesta);
        })}
        {/*         <ul className="respuesta">
          <li>
            - {datos[miSecuencia[0]].respuesta}
            <br />
          </li>
          <li>
            - {datos[miSecuencia[1]].respuesta}
            <br />
          </li>
          <li>
            - {datos[miSecuencia[2]].respuesta}
            <br />
          </li>
          <li>
            - {datos[miSecuencia[3]].respuesta}
            <br />
          </li>
        </ul>
 */}{" "}
        {/*<button onClick={this.cuentaProblemas}>Clic</button>*/}
        <div className="nav-bar">
          <Button
            variant="contained"
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
