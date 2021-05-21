import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Quiz from "../components/Quiz";
import Quiz2 from "../components/Quiz-2";
import Quiz3 from "../components/Quiz-3";

class QuizMenu extends Component {
  state = {
    controlQuiz1: false,
    controlQuiz2: false,
    controlQuiz3: false,
    butListenI: true,
    butListenII: true,
    butMemDrillI: false,
  };
  onActiveListenI = () => {
    this.setState({
      controlQuiz1: true,
      butListenI: false,
      butListenII: false,
      butMemDrillI: false,
    });
  };
  onActiveListenII = () => {
    this.setState({
      controlQuiz1: false,
      controlQuiz3: true,
      butListenI: false,
      butListenII: false,
      butMemDrillI: false,
    });
  };
  onMemDrillI = () => {
    this.setState({
      controlQuiz1: false,
      butListenI: false,
      butListenII: false,
      butMemDrillI: false,
    });
  };
  render() {
    const {
      controlQuiz1,
      controlQuiz2,
      controlQuiz3,
      butListenI,
      butListenII,
      butMemDrillI,
    } = this.state;
    return (
      <div className="nav-bar">
        {butListenI && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.onActiveListenI}
          >
            Listen I
          </Button>
        )}
        {butListenII && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.onActiveListenII}
          >
            Listen II
          </Button>
        )}
        {butMemDrillI && (
          <Button
            variant="contained"
            color="primary"
            onClick={this.onMemDrillI}
          >
            Drill I
          </Button>
        )}
        <div>
          {controlQuiz1 && <Quiz />}
          {controlQuiz2 && <Quiz2 />}
          {controlQuiz3 && <Quiz3 />}
        </div>
      </div>
    );
  }
}
export default QuizMenu;
