import React from 'react'
import { connect } from 'react-redux'
import Alert from '../components/Alert'
import { getAlertMsg } from '../selectors'
import { hideAlert } from '../actions/index'

const AlertContainer = props => <Alert {...props} />

const mapStateToProps = state => ({
  alertMsg: getAlertMsg(state)
})

export default connect(
  mapStateToProps,
  { hideAlert }
)(AlertContainer)
