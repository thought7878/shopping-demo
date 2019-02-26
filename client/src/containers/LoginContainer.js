import React from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { setTitle } from '../actions'
import { login } from '../actions/auth'

const LoginContainer = props => <Login {...props} />

export default connect(
  null,
  { setTitle, login }
)(LoginContainer)
