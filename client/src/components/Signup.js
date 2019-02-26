import React, { Component } from 'react'
import { signupConfig } from '../constants/FormConfig'
import Form from './Form'

class Signup extends Component {
  render() {
    return <Form config={signupConfig} />
  }
}

export default Signup
