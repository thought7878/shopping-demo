import React, { Component } from 'react'
import Form from './Form'
import { loginConfig } from '../constants/FormConfig'

class Login extends Component {
  render() {
    return <Form config={loginConfig} />
  }
}

export default Login
