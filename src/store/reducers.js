import { combineReducers } from 'redux'
import authLogin from './authlogin/reducer'
const rootReducer = combineReducers({
    login:authLogin
})
export default rootReducer