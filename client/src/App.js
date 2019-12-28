import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import  Home  from './pages/home/home'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

