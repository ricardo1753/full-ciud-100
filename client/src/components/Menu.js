import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import Intro from "../components/Intro";
import Listen from "../components/Listen";
import QuizMenu from '../components/QuizMenu';

import "../App.css";

class Menu extends Component {
  state = {
    intro: false,
    listen: false,
    quiz: false,
    muestra: false,
    premenu: false,
  };

  onIntro = () => {
    this.setState({ intro: true, listen: false, quiz: false, muestra: true });
  };
  onListen = () => {
    this.setState({ intro: false, listen: true, quiz: false, muestra: false });
  };
  onQuiz = () => {
    this.setState({ intro: false, listen: false, quiz: true, muestra: false });
  };

  render() {
    const { intro, listen, quiz, muestra } = this.state;
    //const menuButtonStyle = { marginLeft: "1rem" };
    return (
      <div>
        <div
          alt="Welcome Image"
          style={{
            height: muestra ? "340px" : "72px",
            width: "100%",
            backgroundImage: 'url("/images/USPassports.jpg")',
          }}
        >
          <header className="App-header">
            <h2>Learn with RimiWeb</h2>
          </header>
        </div>
        <div className="nav-bar">
          <Button variant="contained" color="primary" onClick={this.onIntro}>
            Help
          </Button>
          <Button variant="contained" color="primary" onClick={this.onListen}>
            Listen
          </Button>
          <Button variant="contained" color="primary" onClick={this.onQuiz}>
            Quiz
          </Button>
        </div>
        
        {intro && <Intro />}
        {listen && <Listen />}
        {quiz && <QuizMenu />}
      </div>
    );
  }
}

export default Menu;
