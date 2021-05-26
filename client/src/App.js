import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './components/Menu';
import Admin from './components/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Menu />
            </Route>
          </Switch>{" "}
        </div>
      </Router>
    );
  }
}

export default App;