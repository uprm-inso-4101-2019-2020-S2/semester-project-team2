import { regUserRef, loginUserRef } from "../../utils/references";
import axios from "axios";

import { userActionTypes } from "./types";

const {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED,
  FETCH_USER_LOCATION,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED
} = userActionTypes;

// Register Action
export const registerUser = user => async dispatch => {
  dispatch({ type: REGISTER_USER });

  await axios
    .post(regUserRef, user)
    .then(res => dispatch({ type: REGISTER_USER_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: REGISTER_USER_FAILED, payload: err }));
};

export const setLocation = location => async dispatch => {
  dispatch({ type: FETCH_USER_LOCATION, payload: location });
};

// Login Action
export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER });

  await axios
    .post(loginUserRef, user)
    .then(res => dispatch({ type: LOGIN_USER_SUCCESS, payload: res }))
    .catch(err => dispatch({ type: LOGIN_USER_FAILED, payload: err }));
};
