import axios from 'axios'
import { SIGNUP_URL, LOGIN_URL } from '../constants/apiConstants'

export const signup = user => async dispath => {
  try {
    const res = await axios.post(SIGNUP_URL, user)
    console.log('res', res.data)
  } catch (error) {
    if (error.response) {
      const { msg } = error.response.data
      console.log(msg)
    }
  }
}

export const login = user => async dispath => {
  try {
    const res = await axios.post(LOGIN_URL, user)
    console.log('res', res.data)
  } catch (error) {
    if (error.response) {
      const { msg } = error.response.data
      console.log(msg)
    }
  }
}
