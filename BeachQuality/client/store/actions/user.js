import { regUserRef } from "../../utils/references";
import axios from "axios";

import { userActionTypes } from "./types";

const {
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILED
} = userActionTypes;

export const registerUser = user => async dispatch => {
  dispatch({ type: REGISTER_USER });

  await axios
    .post(regUserRef, user)
    .then(() => dispatch({ type: REGISTER_USER_SUCCESS }))
    .catch(err => dispatch({ type: REGISTER_USER_FAILED, payload: err }));
};
