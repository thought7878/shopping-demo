import * as types from '../constants/actionTypes'

export const setTitle = title => dispatch => {
  dispatch({ type: types.SET_TITLE, title })
}

export const alert = msg => ({ type: types.SHOW_ALERT, msg })
export const hideAlert = () => dispatch => {
  dispatch({ type: types.HIDE_ALERT })
}
