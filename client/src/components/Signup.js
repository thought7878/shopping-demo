import React, { Component } from 'react'
import { signupConfig } from '../constants/FormConfig'
import Form from './Form'

class Signup extends Component {
  componentDidMount() {
    this.props.setTitle('注册')
  }
  render() {
    return <Form config={signupConfig} handleSubmit={this.props.signup} />
  }
}

export default Signup
