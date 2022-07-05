import axios from 'axios'
import { ip } from '../../config/config'
import { PAGE_CHECK, PARTER_REGISTRATION_FAILED, PARTER_REGISTRATION_SUCCESSFULL, PARTNER_LOADING } from './actionTypes'
export const partnerRegistration = () => {
  return dispatch => {
    dispatch({ type: PARTNER_LOADING })
    axios
      .post(`${ip}/partners`)
      .then(res => {
        dispatch({
          type: PARTER_REGISTRATION_SUCCESSFULL,
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: PARTER_REGISTRATION_FAILED,
          payload: err.message,
        })
      })
  }
}

export const checkPage = formCompleted => ({
  type: PAGE_CHECK,
  payload: formCompleted,
})
