import axios from 'axios'
import { GET_PARTNER_CATEGORY_FAILED } from './actionTypes,js'
import { GET_PARTNER_CATEGORY_SUCCESSFUL } from './actionTypes,js'
import { CATEGORY_LOADING } from './actionTypes,js'
import { ip } from '../../config/config'
export const getPartnerCategory = () => {
  return dispatch => {
    dispatch({ type: CATEGORY_LOADING })
    axios
      .get(`${ip}/partner-category?sort=id,DESC`)
      .then(res => {
        dispatch({
          type: GET_PARTNER_CATEGORY_SUCCESSFUL,
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: GET_PARTNER_CATEGORY_FAILED,
          payload: err.message,
        })
      })
  }
}
