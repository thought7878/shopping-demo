import React, { Component } from 'react'
import Main from '../components/Main'
import '../assets/global.css'
import { connect } from 'react-redux'
import { refresh } from '../actions/auth'

class App extends Component {
  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem('user'))

    if (user) {
      this.props.refresh(user)
    }
  }

  render() {
    return <Main />
  }
}

export default connect(
  null,
  { refresh }
)(App)
