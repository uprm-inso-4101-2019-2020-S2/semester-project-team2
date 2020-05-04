import { beachActionTypes } from "../actions/types";
const {
  FETCH_BEACHES,
  FETCH_BEACHES_FAILED,
  FETCH_BEACHES_SUCCESS
} = beachActionTypes;
const initialState = {
  beaches: [],
  beachesLoading: false,
  err: null
};

const BeachReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BEACHES: {
      return {
        ...state,
        beachesLoading: true
      };
    }

    case FETCH_BEACHES_SUCCESS: {
      return {
        ...state,
        beachesLoading: false,
        beaches: action.payload,
        err: null
      };
    }

    case FETCH_BEACHES_FAILED: {
      return {
        ...state,
        beachesLoading: false,
        err: action.payload
      };
    }
    default:
      return state;
  }
};

export default BeachReducer;
