import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import { datos } from "../datos.json";
import { ThreeSixty } from "@material-ui/icons";

export class Quiz5 extends Component {
  state = {
    datos: datos,
    cuentaCosas: 0,
    entra: true,
    secuencia: [],
  };

  componentDidMount = (e) => {
    this.setState({ entra: false });
    
  }

  addContador = (e) => {
    const { cuentaCosas } = this.state;
    this.setState({ cuentaCosas: cuentaCosas + 1 });
    if (cuentaCosas > 10) {
      this.setState({ cuentaCosas: 1 });
    }
  };

  formaProblema = (e) => {
    const incisos = [];
    const orden = [];
    //let secuencia = [];

    //creando los incisos
    incisos.push(this.state.cuentaCosas);
    //console.log({ incisos });
    let cont = 0;
    let numero;
    while (cont < 4) {
      //let numero = Math.random() * (datos.length - 0) + 0;
      numero = Math.random() * (60 - 0) + 0;
      numero = Math.floor(numero);
      if (!incisos.includes(numero)) {
        incisos.push(numero);
        cont++;
      }
    }
    ////console.log({ incisos: incisos });

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
    //console.log({ "orden ": orden });

    //creando la secuencia final

    cont = 0;
    while (cont < orden.length) {
      //const preSecuencia = [];
      //preSecuencia.push(incisos[orden[cont]]);
      const preSecuencia = [...this.state.secuencia, incisos[orden[cont]]];
      //const newArreglo = [...this.state.originalArray, newObject];
      console.log({ "pre": preSecuencia })
      debugger
      cont++;
      this.setState({ secuencia: preSecuencia });
      debugger
    }


    /*cont = 0;
    while (cont < secuencia.length) {
      this.setState({ preg: this.state.preg.push(datos[secuencia[cont]].correcta) })
      
      cont++;
    }*/

    ////console.log({ "secuencia": secuencia });
    ////console.log("cuentaCosas", this.state.cuentaCosas);
    ////console.log("preg", this.state.preg[0] );
  }

  render() {
    if (this.state.entra) {
      let pepe = this.formaProblema();
      this.setState({ entra: false });
    }
    const { datos, cuentaCosas, secuencia } = this.state;
    //console.log({ datos: datos });
    //console.log("cuentaCosas", cuentaCosas);
    //console.log({ "secuencia": secuencia });
    return (
      <div>
        Pepe es mi socio
        <div className="pregunta container">
        </div>
      </div>
    ); //este es el retorno
  }
}


export default Quiz5;
