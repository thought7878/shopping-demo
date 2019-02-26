import React, { Component } from 'react'
import Form from './Form'
import { loginConfig } from '../constants/FormConfig'

class Login extends Component {
  componentDidMount() {
    this.props.setTitle('登陆')
  }

  render() {
    return <Form config={loginConfig} handleSubmit={this.props.login} />
  }
}

export default Login
