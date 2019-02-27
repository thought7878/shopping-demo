import React, { Component } from 'react'
import { Router } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { history } from '../utils/routerUtils'
import HomeContainer from '../containers/HomeContainer'
import LayoutContainer from '../containers/LayoutContainer'

class Main extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
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
