import React from 'react'
import Login from '../components/Login'
import { connect } from 'react-redux'
import { setTitle } from '../actions'
import { login } from '../actions/auth'
import { getIsFetching } from '../selectors/auth'

const LoginContainer = props => <Login {...props} />

const mapStateToProps = state => ({
  isFetching: getIsFetching(state)
})

export default connect(
  mapStateToProps,
  { setTitle, login }
)(LoginContainer)
