import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Data from "../quiz2.json";

export default class Testing extends Component {
  state = {
    questionIndex: 0,
    selectedAnswer: "",
    correctIndicator: false,
    selectedIndex: null,
    allAnswers: [],
    score: 0,
  };

  componentDidMount() {
    const { questionIndex } = this.state;
    const problem = Data.quiz[questionIndex];
    const { pregunta, respuesta } = problem;
    const allAnswers = this.buscarRespuestasAleatorias(
      questionIndex,
      Data.quiz,
      3,
      respuesta
    );
    this.setState({ allAnswers });
  }

  nextQuestion = (e) => {
    e.preventDefault();
    if (this.state.correctIndicator) {
      const { questionIndex } = this.state;
      const problem = Data.quiz[questionIndex + 1];
      const { pregunta, respuesta } = problem;
      const allAnswers = this.buscarRespuestasAleatorias(
        questionIndex + 1,
        Data.quiz,
        3,
        respuesta
      );
      this.setState({
        score: this.state.score + 1, //analizar esto, aqui nos quedamos
        questionIndex: this.state.questionIndex + 1,
        selectedAnswer: "",
        correctIndicator: false,
        selectedIndex: null,
        allAnswers,
      });
      debugger;
    }
  };

  setSelectedAnswer = (e, selectedIndex) => {
    const selectedAnswer = e.target.value;
    const correctAnswer = Data.quiz[this.state.questionIndex].respuesta;
    console.log({ selectedIndex, selectedAnswer, correctAnswer });
    if (selectedAnswer === correctAnswer) {
      this.setState({ correctIndicator: true, selectedAnswer, selectedIndex }); // a este objeto se le asigna una propiedad con el mismo nombre de la variable y asi obtiene el mismo valor que la variable
    } else {
      this.setState({ correctIndicator: false, selectedAnswer, selectedIndex }); // a este objeto se le asigna una propiedad con el mismo nombre de la variable y asi obtiene el mismo valor que la variable
    }
  };

  buscarRespuestasAleatorias = (
    questionIndex,
    problems,
    limit = 3,
    respuesta
  ) => {
    const aditionalAnswers = [];
    // vamos a hacer una copia de los problemas
    const problemsCopy = Array.from(problems);
    problemsCopy.splice(questionIndex, 1);
    console.log({ problemsCopy });
    for (let i = 0; i < limit; i++) {
      const randomIndex = Math.floor(Math.random() * problemsCopy.length);
      const randomAnswer = problemsCopy[randomIndex].respuesta;
      aditionalAnswers.push(randomAnswer);
      problemsCopy.splice(randomIndex, 1);
    }
    // insertar al azar en la lista
    aditionalAnswers.push(respuesta);
    this.shuffleArray(aditionalAnswers);
    return aditionalAnswers;
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  render() {
    const {
      questionIndex,
      correctIndicator,
      selectedIndex,
      allAnswers,
      selectedAnswer,
    } = this.state;
    const problem = Data.quiz[questionIndex];
    const { pregunta, respuesta } = problem;
    console.log({ questionIndex, correctIndicator, selectedIndex, allAnswers });
    return (
      <div>
        <div style={{ color: "blue", fontWeight: 900 }}>
          section: Reinforcement
        </div>
        {/*plantea pregunta*/}
        <div className="pregunta container">{pregunta}</div>
        {/*<div className="pregunta">{pregunta}</div>*/}
        {allAnswers.map((item, index) => {
          const isCorrect = correctIndicator && item === selectedAnswer;
          const isIncorrect =
            !correctIndicator &&
            item === selectedAnswer &&
            selectedIndex !== null;
          let estilo = "respuesta";
          if (isCorrect) {
            estilo = "respuesta-correcta";
          } else if (isIncorrect) {
            estilo = "respuesta-incorrecta";
          }
          return (
            <div key={item} className={estilo}>
              <input
                type="radio"
                id={item}
                name="respuesta"
                value={item}
                onChange={(e) => {
                  this.setSelectedAnswer(e, index);
                }}
              />
              <label for={item}>{item}</label>
            </div>
          );
        })}
        <div className="button-row">
          <Button
            variant="contained"
            color="primary"
            onClick={this.nextQuestion}
            disabled={!correctIndicator}
          >
            Next Question
          </Button>
        </div>
      </div>
    );
  }
}
