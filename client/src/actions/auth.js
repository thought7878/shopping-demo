import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL } from '../constants/apiConstants'
import { history } from '../utils/routerUtils'
import { alert } from './index'

export const signup = user => dispatch => {
  axios
    .post(SIGNUP_URL, user)
    .then(res => {
      console.log('res', res.data)
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
