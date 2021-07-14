import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuTwoTone from "@material-ui/icons/MenuTwoTone";

import Intro from "./Intro";
import Listen from "./Listen";
import Quiz from "./Quiz";
import Quiz2 from "./Quiz-2";
import Quiz3 from "./Quiz-3";
//import Quiz4 from "./Quiz-4";
import Quiz5 from "./Quiz-5";
import Testing from "./Testing";
import OtroTesting from "./OtroTesting";

class MenuOtro extends React.Component {
  state = {
    anchorEl: null,
    abreIntro: true,
    abreMenu: false,
    abreListen: false,
    abreQuiz: false,
    abreQuiz2: false,
    abreQuiz3: false,
    abreQuiz4: false,
    muestra: true,
    vez: null,
  };

  componentDidMount = () => {
    this.setState({ vez: true });
  };

  onHome = (event) => {
    this.setState({
      abreMenu: true,
      abreIntro: false,
      muestra: false,
      abreListen: false,
      abreQuiz2: false,
      abreQuiz3: false,
      abreQuiz4: false,
      abreQuiz: false,
    });
    this.handleClose();
  };

  onIntro = () => {
    this.setState({
      abreIntro: true,
      muestra: true,
      abreMenu: false,
      abreListen: false,
      abreQuiz2: false,
      abreQuiz3: false,
      abreQuiz4: false,
      abreQuiz: false,
    });
    this.handleClose();
  };

  onListen = () => {
    this.setState({
      abreListen: true,
      abreMenu: false,
      abreIntro: false,
      abreQuiz: false,
      abreQuiz2: false,
      abreQuiz3: false,
      abreQuiz4: false,
      muestra: false,
    });
    this.handleClose();
  };

  onQuiz = (event) => {
    console.log("mi socio ", event.target.id);

    if (event.target.id === "quiz1") {
      this.setState({
        abreQuiz: false,
        abreQuiz2: true,
        abreQuiz3: false,
        abreQuiz4: false,
        abreListen: false,
        abreMenu: false,
        abreIntro: false,
        muestra: false,
      });
    }
    if (event.target.id === "quiz2") {
      this.setState({
        abreQuiz: false,
        abreQuiz2: false,
        abreQuiz3: true,
        abreQuiz4: false,
        abreListen: false,
        abreMenu: false,
        abreIntro: false,
        muestra: false,
      });
    }
    if (event.target.id === "quiz3") {
      this.setState({
        abreQuiz: false,
        abreQuiz2: false,
        abreQuiz3: false,
        abreQuiz4: true,
        abreListen: false,
        abreMenu: false,
        abreIntro: false,
        muestra: false,
      });
    }
    this.handleClose();
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  generateMenu = () => {
    const {
      anchorEl,
      abreIntro,
      abreMenu,
      muestra,
      abreListen,
      abreQuiz,
      abreQuiz2,
      abreQuiz3,
      abreQuiz4,
    } = this.state;

    return (
      <>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MenuTwoTone style={{ fill: "white" }} />
          <div style={{ color: "white" }}>Menu</div>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.onIntro}>Home</MenuItem>
          <MenuItem onClick={this.onListen}>Listening</MenuItem>
          <MenuItem id="quiz1" onClick={this.onQuiz}>
            Quiz 1
          </MenuItem>
          <MenuItem id="quiz2" onClick={this.onQuiz}>
            Quiz 2
          </MenuItem>
          <MenuItem id="quiz3" onClick={this.onQuiz}>
            Quiz 3
          </MenuItem>
        </Menu>
      </>
    );
  };

  render() {
    const {
      anchorEl,
      abreIntro,
      abreMenu,
      muestra,
      abreListen,
      abreQuiz,
      abreQuiz2,
      abreQuiz3,
      abreQuiz4,
    } = this.state;

    return (
      <div>
        <div
          alt="Welcome Image"
          style={{
            height: muestra ? "340px" : "56px",
            width: "100%",
            backgroundImage: 'url("/images/USPassports.jpg")',
          }}
        >
          <header className="App-header">
            <div className="left-nav">Learn with RimiWeb</div>
            <div className="right-nav">{this.generateMenu()}</div>
          </header>
        </div>

        {/* {abreMenu && <MenuOtro />} */}
        {abreIntro && <Intro />}
        {abreListen && <Listen />}
        {abreQuiz && <Quiz />}
        {abreQuiz2 && <Quiz2 />}
        {abreQuiz3 && <Quiz3 />}
        {abreQuiz4 && <Testing />}
      </div>
    );
  }
}

export default MenuOtro;
