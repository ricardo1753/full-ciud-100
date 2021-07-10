import React, { Component } from "react";

import Data from "../quiz2.json";

export default class Testing extends Component {
  state = {
    questionIndex: 0,
    selectedAnswer: "",
    correctIndicator: false,
  };

  nextQuestion = () => {
    if (this.state.correctIndicator) {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
        selectedAnswer: "",
        correctIndicator: false,
      });
    }
  };

  setSelectedAnswer = (e) => {
    const selectedAnswer = e.target.value;
    const correctAnswer = Data.quiz[this.state.questionIndex].respuesta;
    if (selectedAnswer === correctAnswer) {
      this.setState({ correctIndicator: true, selectedAnswer }); // a este objeto se le asigna una propiedad con el mismo nombre de la variable y asi obtiene el mismo valor que la variable
    } else {
      this.setState({ correctIndicator: false, selectedAnswer }); // a este objeto se le asigna una propiedad con el mismo nombre de la variable y asi obtiene el mismo valor que la variable
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
    const randomInsertIndex = Math.floor(Math.random() * (limit + 1));
    //nos quedamos aqui

    return aditionalAnswers;
  };

  render() {
    const { questionIndex, correctIndicator, correctAnswer } = this.state;
    const problem = Data.quiz[questionIndex];
    const { pregunta, respuesta } = problem;
    const aditionalAnswers = this.buscarRespuestasAleatorias(
      questionIndex,
      Data.quiz,
      3,
      respuesta
    );
    console.log({ aditionalAnswers });
    return;
    <div>
      <div className="pregunta">{pregunta}</div>
    </div>;
  }
}
