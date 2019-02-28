import React from 'react'
import Sidebar from '../components/Sidebar'
import { connect } from 'react-redux'
import { getIsAuthenticated } from '../selectors/auth'
import { logout } from '../actions/auth'

const SidebarContainer = props => <Sidebar {...props} />

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
  currentUser: state.auth.currentUser
})

export default connect(
  mapStateToProps,
  { logout }
)(SidebarContainer)
