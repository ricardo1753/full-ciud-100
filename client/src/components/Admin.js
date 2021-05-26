import React, { Component } from 'react'
import axios from 'axios';
import Button from "@material-ui/core/Button";

export class Admin extends Component {
  state = {
    datos: [
      {
        pregunta: "",
        respuesta: "",
        correcta: "",
        sonido: "",
      },
    ],
    pregunta: "",
    respuesta: "",
    correcta: "",
    sonido: "",
  };
  componentDidMount() {
    this.fetchData();
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
  };
  addQuestion = (event) => {};
  deleteQuestion = (event) => {};
  //crear eventos para cada field
  handleInput = (event) => {
    event.target.id  //valor de la propiedad en el estado
    event.target.value // el contenido del field
  }

  render() {
    const { datos } = this.state;
    return (
      <div>
        <div className="question">
          <div className="row">
            <div className="inputLabel" for="pregunta">
              Pregunta:
            </div>
            <input className="textInput" type="text" id="pregunta" />
          </div>
          <div className="row">
            <div className="inputLabel" for="respuesta">
              Respuesta:
            </div>
            <input className="textInput" type="text" id="respuesta" />
          </div>
          <div className="row">
            <div className="inputLabel" for="correcta">
              Correcta:
            </div>
            <input className="textInput" type="text" id="correcta" />
          </div>
          <div className="row">
            <div className="inputLabel" for="sonido">
              Sonido:
            </div>
            <input className="textInput" type="text" id="sonido" />
          </div>
          <div className="m1" />
          <Button
            variant="contained"
            color="primary"
            onClick={this.addQuestion}
          >
            Add Question
          </Button>
        </div>

        <div className="ListaPreguntas">
          {datos.map((item) => {
            return (
              <div className="question" key={item.pregunta}>
                <div className="row">Pregunta: {item.pregunta}</div>
                <div className="row">Respuesta: {item.respuesta}</div>
                <div className="row">Correcta: {item.correcta}</div>
                <div className="row">Sonido: {item.sonido}</div>
                <div className="m1" />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.deleteQuestion}
                >
                  Delete Question
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Admin