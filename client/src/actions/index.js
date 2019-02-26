import * as types from '../constants/actionTypes'

export const setTitle = title => dispatch => {
  dispatch({ type: types.SET_TITLE, title })
}
