import React, { Component } from "react";
import Presenta from "./components/Presenta";
import Listen from "./components/Listen";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: false,
      pres: false,
      quiz: false,
    };
    this.onIntro = this.onIntro.bind(this);
    this.onPresenta = this.onPresenta.bind(this);
    this.onQuiz = this.onQuiz.bind(this);
  }
  onIntro() {
    this.setState({ intro: !this.state.intro });
    console.log("Intro: " + this.state.intro);
  }
  onPresenta() {
    this.setState({ intro: false });
    this.setState({ pres: true });
    console.log("intro: " + this.state.intro);
    console.log("pres: " + this.state.pres);
  }
  onQuiz() {
    this.setState({ intro: false });
    this.setState({ pres: false });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Learn with RimiWeb!</h2>
        </header>
        <div className="debajo-boton">
          <button className="boton" onClick={this.onIntro}>
            Home
          </button>
          <button className="boton" onClick={this.onPresenta}>
            Listen
          </button>
          <button className="boton" onClick={this.onPresenta}>
            Quiz
          </button>
        </div>
        <div>
          {this.state.intro && <Presenta />}
          {this.state.pres && <Listen />}
        </div>
      </div>
    );
  }
}
export default App;
