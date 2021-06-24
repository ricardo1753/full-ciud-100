import React, { Component } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";

export class Admin extends Component {
  state = {
    deleteMode: false,
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
  toggleDeleteMode = (event) => {
    this.setState({deleteMode: !this.state.deleteMode})
  }
  fetchData = () => {
    //llamar al servidor /datos
    axios
      .get("/datos")
      .then((response) => {
        this.setState({ datos: response.data.datos });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  addQuestion = (event) => {
    const { pregunta, respuesta, correcta, sonido } = this.state;
    axios
      .post("/pregunta", { pregunta, respuesta, correcta, sonido })
      .then((response) => {
        this.setState({
          datos: response.data.datos,
          pregunta:"",
          respuesta:"",
          correcta:"",
          sonido:""
        });
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  deleteQuestion = (pregunta) => (event) => {
    axios
      .delete("/pregunta", {data: { pregunta }})
      .then((response) => {
        this.setState({ datos: response.data.datos });
        this.toggleDeleteMode(event);
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  //crear eventos para cada field
  handleInput = (event) => {
    //console.log({ key: event.target.id, value: event.target.value })
    this.setState({[event.target.id]: event.target.value})
    //event.target.id; //valor de la propiedad en el estado
    //event.target.value; // el contenido del field
  };

  render() {
    const { datos, pregunta, respuesta, correcta, sonido } = this.state;
    //console.log({ pregunta, respuesta, correcta, sonido });
    return (
      <div>
        <div className="question">
          <div className="row">
            <div className="inputLabel" for="pregunta">
              Pregunta:
            </div>
            <input
              className="textInput"
              onChange={this.handleInput}
              type="text"
              id="pregunta"
              value={pregunta}
            />
          </div>
          <div className="row">
            <div className="inputLabel" for="respuesta">
              Respuesta:
            </div>
            <input
              className="textInput"
              onChange={this.handleInput}
              type="text"
              id="respuesta"
              value={respuesta}
            />
          </div>
          <div className="row">
            <div className="inputLabel" for="correcta">
              Correcta:
            </div>
            <input
              className="textInput"
              onChange={this.handleInput}
              type="text"
              id="correcta"
              value={correcta}
            />
          </div>
          <div className="row">
            <div className="inputLabel" for="sonido">
              Sonido:
            </div>
            <input
              className="textInput"
              onChange={this.handleInput}
              type="text"
              id="sonido"
              value={sonido}
            />
          </div>
          <div className="m1" />
          <div className="flex">
            <Button
              fullWidth="false"
              variant="contained"
              color="primary"
              onClick={this.addQuestion}
            >
              Add Question
            </Button>
            <div style={{width:"10px"}} />
            <Button
              fullWidth="false"
              variant="contained"
              color="primary"
              onClick={this.toggleDeleteMode}
            >
              Delete Mode
            </Button>
          </div>
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
                {this.state.deleteMode && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.deleteQuestion(item.pregunta)}
                  >
                    Delete Question
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Admin;
