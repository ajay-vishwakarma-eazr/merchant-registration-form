import {
  CHECK_LOGIN,
  LOGIN_PARTNER_SUCCESSFUL,
  LOGIN_LOADING,
  OTP_SENT,
  OTP_SENT_FAILED,
  LOGIN_PARTNER_FAILED,
  
  VERIFY_LOADING,
  REGISTER_PARTNER_SUCCESS,
  REGISTER_PARTNER_FAILED,
  REGISTER_PARTNER_LOADING,
  CLEAR_ERROR,
  VERIFY_OTP_SUCCESS,
  VERIFY_OPT_FAIL,
} from './actionTypes'
import axios from 'axios'

import setAuthToken from '../../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import { ip } from '../../config/config'
// export const checkLogin = (PARTNER, history) => {
//   return {
//     type: CHECK_LOGIN,
//     payload: { PARTNER, history },
//   }
// }

export const login = contactNumber => {
  return dispatch => {
    dispatch(setLoginLoading())
    axios
      .post(`${ip}/partners/send-otp`, { contactNumber })
      .then(res => {
        dispatch({
          type: OTP_SENT,
          payload: res.data.message,
        })
      })
      .catch(err => {
        dispatch({
          type: OTP_SENT_FAILED,
          payload: err.response.data.message,
        })
      })
  }
}

export const register = data => {
  return dispatch => {
    dispatch(setLoginLoading())
    axios
      .post(`${ip}/admins`, data)
      .then(res => {
        const { accessToken } = res.data.admin
        const decoded = jwt_decode(accessToken)
        dispatch({
          type: REGISTER_PARTNER_SUCCESS,
          payload: decoded,
        })
      })
      .catch(err => {
        dispatch({
          type: REGISTER_PARTNER_FAILED,
          payload: err.response.data.message,
        })
      })
  }
}

export const verify = (contactNumber, otp, history) => async dispatch => {
  try {
    const res = await axios.post(`${ip}/partners/verify-otp`, {
      contactNumber,
      otp,
    })
    if (res.data.message === 'Partner Logged In') {
      window.open('https://partner.eazr.in/login')
    }


    // if (res.data.admin !== null) {
    //   const { accessToken } = res.data.admin
    //   localStorage.setItem('accessToken', accessToken)
    //   setAuthToken(accessToken)
    //   const decoded = jwt_decode(accessToken)
    //   dispatch(loginPartnerSuccessful(decoded))

    // } else {
    //   throw res.data.message
    // }
  } catch (error) {
    dispatch({
      type: VERIFY_OPT_FAIL,
      payload: error.response.data?.message,
    })
    if (error.response.data?.message === 'Partner Not Registered') {
      history('/register')
    }
    
  }
}

export const resend = (phone, otp) => {
  return dispatch => {
    dispatch(setLoginLoading())

    axios
      .post(`${ip}/admin/auth/resendotp`, { phone, otp })
      .then(res => {
        dispatch({
          type: OTP_SENT,
        })
      })
      .catch(err => {
        dispatch({
          type: OTP_SENT_FAILED,
          payload: err.message,
        })
      })
  }
}

export const loginPartnerSuccessful = partner => {
  return {
    type: LOGIN_PARTNER_SUCCESSFUL,
    payload: partner,
  }
}

export const setLoginLoading = () => {
  return {
    type: LOGIN_LOADING,
  }
}



export const clearError = () => {
  return {
    type: CLEAR_ERROR,
  }
}
