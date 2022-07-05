import { PAGE_CHECK, PARTER_REGISTRATION_FAILED, PARTER_REGISTRATION_SUCCESSFULL, PARTNER_LOADING } from "./actionTypes"

const initialState = {
  partner: [],
  loading: false,
  errors: null,
  pageCompleted:[]
}
const partnerRegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PARTNER_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      }
    case PARTER_REGISTRATION_SUCCESSFULL:
      return {
        ...state,
        partner: action.payload,
        errors: null,
        loading: false,
      }
    case PARTER_REGISTRATION_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    case PAGE_CHECK:
      return {
        pageCompleted:action.payload,
      }
    default:
      return state
  }
}

export default partnerRegistrationReducer
