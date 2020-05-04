import { beachActionTypes } from "./types";
const {
  FETCH_BEACHES,
  FETCH_BEACHES_SUCCESS,
  FETCH_BEACHES_FAILED
} = beachActionTypes;
import axios from "axios";
import { beachRef } from "../../utils/references";
export const getBeaches = () => async dispatch => {
  dispatch({ type: FETCH_BEACHES });

  await axios
    .get(beachRef)
    .then(response =>
      dispatch({ type: FETCH_BEACHES_SUCCESS, payload: response.data })
    )
    .catch(err => dispatch({ type: FETCH_BEACHES_FAILED, payload: err }));
};
