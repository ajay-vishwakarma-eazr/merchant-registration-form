import { GET_PARTNER_CATEGORY_FAILED } from "./actionTypes,js"
import { GET_PARTNER_CATEGORY_SUCCESSFUL } from "./actionTypes,js"
import { CATEGORY_LOADING } from "./actionTypes,js"
const initialState = {
  partnerCategory: [],
  loading: false,
  errors: null,
}
const partnerCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      }
    case GET_PARTNER_CATEGORY_SUCCESSFUL:
      return {
        ...state,
        partnerCategory: action.payload,
        errors: null,
        loading: false,
      }
    case GET_PARTNER_CATEGORY_FAILED:
      return {
        ...state,
        errors: action.payload,
      }
    default:
      return state
  }
}

export default partnerCategoryReducer
