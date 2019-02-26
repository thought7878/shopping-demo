import React from 'react'
import Signup from '../components/Signup'
import { connect } from 'react-redux'
import { setTitle } from '../actions'

const SignupContainer = props => <Signup {...props} />

export default connect(
  null,
  { setTitle }
)(SignupContainer)
