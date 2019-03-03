import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { getTitle, getAlertVisibility } from '../selectors'
import { getIsAuthenticated, getIsFetching } from '../selectors/auth'

const LayoutContainer = props => <Layout {...props} />

const mapStateToProps = state => ({
  title: getTitle(state),
  isAlertShown: getAlertVisibility(state),
  isAuthenticated: getIsAuthenticated(state),
  isFetching: getIsFetching(state)
})

export default connect(mapStateToProps)(LayoutContainer)
