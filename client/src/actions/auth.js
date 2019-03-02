import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL } from '../constants/apiConstants'
import { history } from '../utils/routerUtils'
import { alert } from './index'
import * as types from '../constants/actionTypes'

export const signup = user => dispatch => {
  axios
    .post(SIGNUP_URL, user)
    .then(res => {
      console.log('res', res.data)
      dispatch({ type: types.SIGNUP_SUCCESS, user: res.data.user })
      window.localStorage.setItem('user', JSON.stringify(res.data.user))
      history.push('/dashboard')
    })
    .catch(error => {
      if (error.response) {
        const { msg } = error.response.data
        console.log('error', msg)
        dispatch(alert(msg))
      }
    })
}

export const login = user => dispatch => {
  axios
    .post(LOGIN_URL, user)
    .then(res => {
      console.log('res', res.data)
      dispatch({ type: types.LOGIN_SUCCESS, user: res.data.user })
      window.localStorage.setItem('user', JSON.stringify(res.data.user))
      history.push('/dashboard')
    })
    .catch(error => {
      if (error.response) {
        const { msg } = error.response.data
        console.log('error', msg)
        dispatch(alert(msg))
      }
    })
}

export const logout = () => {
  history.push('/')
  window.localStorage.removeItem('user')
  return dispatch => {
    dispatch({ type: types.LOGOUT_SUCCESS })
  }
}
// 刷新页面action逻辑
export const refresh = user => dispatch => {
  dispatch({ type: types.LOGIN_SUCCESS, user })
}
