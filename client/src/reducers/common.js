import { combineReducers } from 'redux'
import { SET_TITLE } from '../constants/actionTypes'

const title = (state = '标题', action) => {
  switch (action.type) {
    case SET_TITLE:
      return action.title

    default:
      return state
  }
}

export default combineReducers({
  title
})
