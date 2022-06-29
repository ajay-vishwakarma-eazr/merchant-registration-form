import { GET_PARTNER_TYPES_FAILED, GET_PARTNER_TYPES_SUCCESSFUL, TYPES_LOADING } from "./actionTypes"

const initialState = {
  partnerTypes: [],
  loading: false,
  errors: null,
}
const partnerTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      }
    case GET_PARTNER_TYPES_SUCCESSFUL:
      return {
        ...state,
        partnerTypes: action.payload,
        errors: null,
        loading: false,
      }
    case GET_PARTNER_TYPES_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state
  }
}

export default partnerTypesReducer
