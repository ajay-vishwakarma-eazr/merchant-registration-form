import {
  CHECK_LOGIN,
  LOGIN_PARTNER_SUCCESSFUL,
  LOGOUT_PARTNER,
  LOGOUT_PARTNER_SUCCESS,
  OTP_SENT,
  OTP_SENT_FAILED,
  LOGOUT_PARTNER_FAILED,
  LOGIN_LOADING,
  LOGIN_PARTNER_FAILED,
  VERIFY_LOADING,
  SET_CURRENT_PARTNER,
  CLEAR_ERROR,
  VERIFY_OTP_SUCCESS,
  VERIFY_OPT_FAIL,
} from './actionTypes'
const initialState = {
  isAuthenticated: false,
  loading: false,
  verifyLoading: false,
  partner: [],
  error: [],
  message: [],
}

const authLogin = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loading: true,
        errors: {},
      }
    case VERIFY_LOADING:
      return {
        ...state,
        errors: {},
        verifyLoading: true,
      }
    case OTP_SENT:
      return {
        ...state,
        loading: false,
        message: action.payload,
      }

    case OTP_SENT_FAILED:
      return {
        ...state,
        loading: false,
        showOtpModal: true,
        errors: action.payload,
      }

    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        message: action.payload,
      }

    case VERIFY_OPT_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case CHECK_LOGIN:
      return {
        ...state,
        loading: true,
      }

    case LOGIN_PARTNER_SUCCESSFUL:
      return {
        ...state,
        loading: false,
        verifyLoading: false,
        isAuthenticated: true,
        partner: action.payload,
      }

    case SET_CURRENT_PARTNER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        PARTNER: isEmpty(action.payload) ? null : action.payload,
      }

    case LOGIN_PARTNER_FAILED:
      return {
        ...state,
        loading: false,
        verifyLoading: false,
        errors: action.payload,
      }
    case LOGOUT_PARTNER:
      return {
        ...state,
        loading: false,
        partner: null,
        isAuthenticated: false,
      }

    case LOGOUT_PARTNER_SUCCESS:
      return { ...state }
    case LOGOUT_PARTNER_FAILED:
      return { ...state, loading: false, errors: action.payload }


    case CLEAR_ERROR:
      return {
        error: [],
      }

    default:
      return { ...state }
  }
  return state
}

export default authLogin
