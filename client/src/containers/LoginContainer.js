import React from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { setTitle } from '../actions'

const LoginContainer = props => <Login {...props} />

export default connect(
  null,
  { setTitle }
)(LoginContainer)
