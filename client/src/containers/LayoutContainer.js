import React from 'react'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { getTitle } from '../selectors'

const LayoutContainer = props => <Layout {...props} />

const mapStateToProps = state => ({
  title: getTitle(state)
})

export default connect(mapStateToProps)(LayoutContainer)
