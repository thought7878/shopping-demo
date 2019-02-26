import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import LayoutContainer from '../containers/LayoutContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route component={LayoutContainer} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default Main
