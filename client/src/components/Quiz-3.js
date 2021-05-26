import React, { Component } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import Assignment from "@material-ui/icons/Assignment";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';

// import { datos } from "../datos_mem.json";

class Quiz3 extends Component {
  state = {
    datos: [
      {
        pregunta: "",
        respuesta: "",
        correcta: "",
        sonido: "",
      },
    ],
    respuestaUsuario: "",
    indicePregunta: 0,
    correctCheck: false,
    correctas: 0,
    guiaPreguntas: [],
    maxPreguntas: 10,
    cuentaPreguntas: 0,
  };
  componentDidMount() {
    const { guiaPreguntas, maxPreguntas } = this.state;
    //checking cookies
    let correctas = 0;
    const galleta = localStorage.getItem("correctas");
    if (galleta) {
      let corr = Number(galleta);
      if (corr && !isNaN(corr)) {
        correctas = corr;
      }
    }
    this.fetchData();
    //const datosReorganizados = datos.sort((pregunta1, pregunta2) => { return pregunta2.respuesta.length - pregunta1.respuesta.length });
    //this.setState({ datos: datosReorganizados, correctas });    }
  }
  fetchData = () => {
    //llamar al servidor /datos
    axios
      .get("/datos")
      .then((response) => {
        console.log({ response });
        this.setState({ datos: response.data.datos });
      })
      .catch((error) => {
        console.log({ error });
      });
    //cuando el servidor responde si es valida configuramos los datos en el componente

    //la propiedad 'datos' se la setSate al estado para que el componente pueda consumir la lista de preguntas del servidor
  };
  queHacer = (event) => {
    alert(
      "Selecciona la respuesta correcta." +
        "Después pulsa 'Check Answer'." +
        "Si tu respuesta es correcta lo va a indicar en color verde," +
        "sino es correcta lo señala en color rojo y en verde te dice cuál es la respuesta correcta."
    );
  };
  handleChange = (event) => {
    this.setState({
      respuestaUsuario: event.target.value,
      correctCheck: false,
    });
  };
  incrementarCorrecta = () => {
    const galleta = localStorage.getItem("correctas");
    if (!galleta) {
      localStorage.setItem("correctas", "1");
      this.setState({ correctas: 1 });
      return;
    }
    let correctas = Number(galleta);
    if (correctas && !isNaN(correctas)) {
      correctas++;
      localStorage.setItem("correctas", correctas + "");
      this.setState({ correctas });
    }
  };
  checkAnswer = (event) => {
    const { respuestaUsuario, datos, indicePregunta, correctCheck } =
      this.state;
    const { correcta } = datos[indicePregunta];

    if (respuestaUsuario === correcta) {
      this.incrementarCorrecta();
    }

    //si no hay respuesta automaticamente es falso- empty string is falsy
    if (respuestaUsuario) {
      this.setState({ correctCheck: !correctCheck });
    }
  };
  nextQuestion = (event) => {
    const { datos, maxPreguntas, guiaPreguntas, cuentaPreguntas } = this.state;
    if (cuentaPreguntas === maxPreguntas) {
      alert("New set of questions!!!");
      this.setState({
        cuentaPreguntas: 0,
        //respuestaUsuario: "",
        //correctCheck: false,
      });
    } else {
      this.setState({
        cuentaPreguntas: cuentaPreguntas + 1,
        //respuestaUsuario: "",
        //correctCheck: false,
      });
    }
    this.setState({
      respuestaUsuario: "",
      correctCheck: false,
    });
    //Getting the questions to be done at random
    let dale = false;
    while (!dale) {
      let numero = Math.random() * (datos.length - 0) + 0;
      numero = Math.floor(numero);
      let offset = guiaPreguntas.indexOf(numero);
      if (offset === -1) {
        guiaPreguntas.push(numero);
        this.setState({ indicePregunta: numero });
        dale = true;
      }
    }
  };
  render() {
    const { datos, indicePregunta, respuestaUsuario, correctCheck, correctas } =
      this.state;
    const resp = datos[indicePregunta].respuesta.split(".");
    //sacamos de datos[indicePregunta] correcta y lo ponemos en la variable que creamos de nombre 'correcta'
    //const correcta = datos[indicePregunta].correcta (destructuring)
    const { correcta, pregunta } = datos[indicePregunta];
    //const indicador = guiaPreguntas[indicePregunta];

    return (
      <div>
        {/*plantea pregunta*/}
        <div className="pregunta">{pregunta}</div>
        <RadioGroup
          aria-label="Lista De Respuestas"
          name="respuestas"
          value={respuestaUsuario}
          onChange={this.handleChange}
        >
          {resp.map((value, index) => {
            let label = value;
            let root = "respuesta";
            if (
              correctCheck &&
              value === correcta &&
              correcta === respuestaUsuario
            ) {
              label = label + " (Correct!)";
            } else if (
              correctCheck &&
              correcta !== respuestaUsuario &&
              value === respuestaUsuario
            ) {
              root = "respuesta-incorrecta";
            }
            if (correctCheck && value === correcta) {
              root = "respuesta-correcta";
            }

            return (
              <FormControlLabel
                key={label + indicePregunta}
                classes={{ root }}
                value={value}
                control={<Radio />}
                label={label}
              />
            );
          })}
        </RadioGroup>
        <div className="flex right p1">
          <Button variant="contained" color="primary" onClick={this.queHacer}>
            ?
          </Button>
          <Button
            disabled={!respuestaUsuario}
            variant="contained"
            color="primary"
            onClick={this.checkAnswer}
          >
            Check Answer
          </Button>
          <div className={correctCheck ? "m1" : ""} />
          {correctCheck && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.nextQuestion}
            >
              Next Question
            </Button>
          )}{" "}
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Typography variant="h6">Total Correct Answers </Typography>
          <Badge color="primary" badgeContent={correctas}>
            <Assignment />
          </Badge>
        </div>
      </div>
    );
  }
}
export default Quiz3;
