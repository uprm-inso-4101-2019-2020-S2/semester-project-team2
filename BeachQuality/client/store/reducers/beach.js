import { beachActionTypes } from "../actions/types";
const {
  FETCH_BEACHES,
  FETCH_BEACHES_FAILED,
  FETCH_BEACHES_SUCCESS,
  SELECT_CURRENT_BEACH,
  CLEAR_CURRENT_BEACH
} = beachActionTypes;
const initialState = {
  beaches: [],
  beachesLoading: false,
  err: null,
  currentBeach: null
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

    case SELECT_CURRENT_BEACH: {
      return {
        ...state,
        currentBeach: action.payload
      };
    }

    case CLEAR_CURRENT_BEACH: {
      return {
        ...state,
        currentBeach: null
      };
    }
    default:
      return state;
  }
};

export default BeachReducer;
