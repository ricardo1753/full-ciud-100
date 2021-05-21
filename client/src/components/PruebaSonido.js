import React, { Component } from "react";

class Sonora extends Component {
  componentDidMount() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  render() {
    return (
      <div>
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
    );
  }
}
export default Sonora;