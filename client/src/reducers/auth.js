import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
      return true
    case types.LOGOUT_SUCCESS:
      return false
    default:
      return state
  }
}

const currentUser = (state = { _id: '', username: '' }, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS:
      return action.user
    case types.LOGOUT_SUCCESS:
      return { _id: '', username: '' }
    default:
      return state
  }
}

export default combineReducers({ isAuthenticated, currentUser })
