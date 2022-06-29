import { combineReducers } from 'redux'
import authLogin from './authlogin/reducer'
import partnerCategoryReducer from "./partnerCategory/reducer"
import partnerTypesReducer from "./partnerTypes/reducer"
const rootReducer = combineReducers({
  login: authLogin,
  partnerCategory: partnerCategoryReducer,
  partnerTypes: partnerTypesReducer,
})
export default rootReducer