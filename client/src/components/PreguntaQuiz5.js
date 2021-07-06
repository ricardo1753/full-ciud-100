import React, { Component } from 'react'

import { datos } from "../datos.json";

export class PreguntaQuiz5 extends Component {
  state = {
    _datos: datos,
    cuenta: 3,
  };

  render() {
    const { _datos, cuenta } = this.state;

    //creando los incisos
    let incisos = [];
    let cont = 0;
    let numero;
    incisos.push(cuenta);
    debugger;
    console.log({ incisos: incisos });
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


    //cambiando el orden de los incisos
    let orden = [];
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
    console.log({ orden: orden });

    //creando la secuencia final
    let secuencia = [];
    cont = 0;
    while (cont < 5) {
      secuencia.push(_datos[incisos[orden[cont]]].pregunta);
      cont++;
    }
    console.log({ secuencia: secuencia });


    return (
      <div>
        {/*<div className="pregunta container">
          {datos[secuencia[this.props.numeroProblema]].pregunta}
          <div className="respuesta">
            <input
              id="preg0"
              type="radio"
              value={datos[secuencia[0]].correcta}
              className="respuesta"
              checked={this.state.estudios === datos[secuencia[0]].correcta}
            />
            {datos[secuencia[0]].correcta}
            <br />
            <input
              id="preg1"
              type="radio"
              value={datos[secuencia[1]].correcta}
              className="respuesta"
              checked={this.state.estudios === datos[secuencia[1]].correcta}
              onChange={this.cambioEstudios}
            />
            {datos[secuencia[1]].correcta}
            <br />
            <input
              id="preg2"
              type="radio"
              value={datos[secuencia[2]].correcta}
              className="respuesta"
              checked={this.state.estudios === datos[secuencia[2]].correcta}
            />
            {datos[secuencia[2]].correcta}
            <br />
            <input
              id="preg3"
              type="radio"
              value={datos[secuencia[3]].correcta}
              className="respuesta"
              checked={this.state.estudios === datos[secuencia[3]].correcta}
            />
            {datos[secuencia[3]].correcta}
            <br />
            <input
              id="preg4"
              type="radio"
              value={datos[secuencia[4]].correcta}
              className="respuesta"
              checked={this.state.estudios === datos[secuencia[4]].correcta}
            />
            {datos[secuencia[4]].correcta}
            <br />
          </div>
    </div>*/}
      </div>
    );
  }
  }

export default PreguntaQuiz5
