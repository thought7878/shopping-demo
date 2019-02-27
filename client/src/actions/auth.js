import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL } from '../constants/apiConstants'
import { history } from '../utils/routerUtils'

export const signup = user => async dispath => {
  try {
    const res = await axios.post(SIGNUP_URL, user)
    console.log('res', res.data)
    history.push('/dashboard')
  } catch (error) {
    if (error.response) {
      const { msg } = error.response.data
      console.log('error', msg)
    }
  }
}

export const login = user => async dispath => {
  try {
    const res = await axios.post(LOGIN_URL, user)
    console.log('res', res.data)
    history.push('/dashboard')
  } catch (error) {
    if (error.response) {
      const { msg } = error.response.data
      console.log('error', msg)
    }
  }
}
