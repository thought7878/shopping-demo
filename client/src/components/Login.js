import React, { Component } from 'react'
import Form from './Form'
import { loginConfig } from '../constants/FormConfig'
import styled from 'styled-components'
import Spinner from 'react-spinner'

class Login extends Component {
  componentDidMount() {
    this.props.setTitle('登陆')
  }

  render() {
    const { isFetching } = this.props
    return (
      <Wrap>
        {isFetching ? (
          <Spinner />
        ) : (
          <Form config={loginConfig} handleSubmit={this.props.login} />
        )}
      </Wrap>
    )
  }
}

export default Login

const Wrap = styled.div``
