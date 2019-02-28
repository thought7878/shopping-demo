import { combineReducers } from 'redux'
import * as types from '../constants/actionTypes'

const title = (state = '标题', action) => {
  switch (action.type) {
    case types.SET_TITLE:
      return action.title

    default:
      return state
  }
}

const alert = (state = { isShown: false, msg: '' }, action) => {
  switch (action.type) {
    case types.SHOW_ALERT:
      return { isShown: true, msg: action.msg }
    case types.HIDE_ALERT:
      return { isShown: false, msg: '' }
    default:
      return state
  }
}

export default combineReducers({
  title,
  alert
})
