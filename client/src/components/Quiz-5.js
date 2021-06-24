import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { datos } from "../datos.json";

export class Quiz5 extends Component {
  state = {
    datos: datos,
    cuentaCosas: 0,
    evalua: false,
  };

  onChangeValue = (event) => {
    const { datos, cuentaCosas, evalua } = this.state;
    console.log("evento", event.target.value);
    console.log("datos", datos[cuentaCosas].correcta)
    if (event.target.value === datos[cuentaCosas].correcta) {
      console.log("muy bien")
      this.setState({evalua: true})
    } else {
      this.setState({evalua: false})
    }
    console.log("eval", evalua)
  };

  addContador = (event) => {
    const { cuentaCosas } = this.state;
    this.setState({ cuentaCosas: cuentaCosas + 1 });
    if (cuentaCosas > 10) {
      this.setState({cuentaCosas: 1})
    }
  };

  render() {
    const { datos, cuentaCosas } = this.state;
    let incisos = [];
    let orden = [];
    let secuencia = [];

    //creando los incisos
    incisos.push(cuentaCosas);
    console.log({ incisos });
    let cont = 0;
    let numero;
    while (cont < 4) {
      //let numero = Math.random() * (datos.length - 0) + 0;
      numero = Math.random() * (20 - 0) + 0;
      numero = Math.floor(numero);
      if (!incisos.includes(numero)) {
        incisos.push(numero);
        cont++;
      }
    }
    console.log({ incisos: incisos });

    //creando el orden de los incisos
    cont = 0;
    numero = 0;
    while (cont < 5) {
      numero = Math.random() * (5 - 0) + 0;
      numero = Math.floor(numero);
      if (!orden.includes(numero)) {
        orden.push(numero);
        cont++;
      }
    }
    console.log({ "orden ": orden });

    //creando la secuencia final

    cont = 0;
    while (cont < orden.length) {
      secuencia.push(incisos[orden[cont]])
      cont ++
    }
    console.log({ secuencia: secuencia });
    console.log("cuentaCosas", cuentaCosas);

    return (
      <div>
        <div className="pregunta container">
          {datos[secuencia[cuentaCosas]].pregunta}
        </div>
        <div className="respuesta" onChange={this.onChangeValue}>
          <input
            id="preg0"
            type="radio"
            value={datos[secuencia[0]].correcta}
            className="respuesta"
          />
          {datos[secuencia[0]].correcta}
          <br />
          <input
            id="preg1"
            type="radio"
            value={datos[secuencia[1]].correcta}
            className="respuesta"
          />
          {datos[secuencia[1]].correcta}
          <br />
          <input
            id="preg2"
            type="radio"
            value={datos[secuencia[2]].correcta}
            className="respuesta"
          />
          {datos[secuencia[2]].correcta}
          <br />
          <input
            id="preg3"
            type="radio"
            value={datos[secuencia[3]].correcta}
            className="respuesta"
          />
          {datos[secuencia[3]].correcta}
          <br />
          <input
            id="preg4"
            type="radio"
            value={datos[secuencia[4]].correcta}
            className="respuesta"
          />
          {datos[secuencia[4]].correcta}
          <br />
        </div>
        <div className="flex right p1">
          <Button
            variant="contained"
            color="primary"
            onClick={this.addContador}
          >
            Next
          </Button>
        </div>
      </div>
    );
  }
}

export default Quiz5;
