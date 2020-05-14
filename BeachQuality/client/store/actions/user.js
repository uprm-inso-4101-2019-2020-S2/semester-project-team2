import { regUserRef } from "../../utils/references";
import axios from "axios";

import { userActionTypes } from "./types";

const {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  FETCH_USER_LOCATION,

} = userActionTypes;

export const registerUser = user => async dispatch => {
  dispatch({ type: REGISTER_USER });

  await axios
    .post(regUserRef, user)
    .then(res => dispatch({ type: REGISTER_USER_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: REGISTER_USER_FAILED, payload: err }));
};

export const setLocation = location => async dispatch => {
  dispatch({type: FETCH_USER_LOCATION, payload: location });

  
}
