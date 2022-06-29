import { ip } from '../../config/config'
import axios from 'axios'
import { GET_PARTNER_TYPES_FAILED, GET_PARTNER_TYPES_SUCCESSFUL, TYPES_LOADING } from './actionTypes'
export const getPartnerTypes = () => {
  return dispatch => {
    dispatch({ type: TYPES_LOADING })
    axios
      .get(`${ip}/partner-types?sort=id,DESC`)
      .then(res => {
        dispatch({
          type: GET_PARTNER_TYPES_SUCCESSFUL,
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: GET_PARTNER_TYPES_FAILED,
          payload: err.message,
        })
      })
  }
}
