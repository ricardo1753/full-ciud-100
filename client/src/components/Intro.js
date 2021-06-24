import React, {Component} from 'react'
import '../App.css'
import Button from "@material-ui/core/Button";
import MenuOtro from './MenuOtro';
import { FlashAutoOutlined } from '@material-ui/icons';


class Intro extends Component {
  state = {
    muestra: false,
  }
  render() {
    return (
      <div>
        {/*<div
          alt="Welcome Image"
          style={{
            height: "340px",
            width: "100%",
            backgroundImage: 'url("/images/USPassports.jpg")',
          }}
        >
          <header className="App-header">
            <h2>Learn with RimiWeb</h2>
          </header>
        </div>*/}
        <div className="wraper">
          <div
            style={{ color: "blue", paddingLeft: "10px", paddingRight: "10px", fontSize:"small" }}
          >
            Clic MENU para disponer de diferentes opciones.
          </div>
          <br></br>
          <p className="pal1">
            Aquí están las 100 preguntas del exámen de Cívica (Historia y
            Gobierno) para el exámen de Naturalización.
          </p>
          <p className="pal2">
            El exámen de Cívica consiste en una prueba oral y el oficial de
            USCIS le rpeguntará al aspirante un máximo de 10 preguntas.
            <b>
              <br></br>
              <br></br>El aplicante tiene que responder correctamente al menos 6
              de las 10 preguntas para aprobar la sección de Cívica del exámen
              de Naturalización.
            </b>
          </p>
          <p className="pal3">
            <br></br>Algunas respuestas del exámen pueden cambiar debido a
            elecciones o sustituciones. Mientras te preparas para la prueba,
            asegúrate de contar con las respuestas actualizadas de estas
            preguntas.
          </p>
          <p className="pal4">
            <br></br>El oficial de USCIS que te examina <b>NO</b> aceptará
            ninguna respuesta incorrecta.
          </p>
        </div>{" "}
      </div>
    );
    }
  }

export default Intro