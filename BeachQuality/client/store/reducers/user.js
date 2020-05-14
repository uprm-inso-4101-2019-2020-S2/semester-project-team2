import { userActionTypes } from "../actions/types";
const {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS
} = userActionTypes;

const initialState = {
  err: null,
  account: null,
  userLoading: false,
  isAuthenticated: false
};

const userReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    // Register
    case REGISTER_USER: {
      return {
        ...state,
        userLoading: true
      };
    }

    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        err: null,
        account: action.payload,
        userLoading: false
      };
    }

    case REGISTER_USER_FAILED: {
      return {
        ...state,
        userLoading: false,
        err: action.payload
      };
    }

    // Login
    case LOGIN_USER: {
      return {
        ...state,
        userLoading: true
      };
    }

    case LOGIN_USER_SUCCESS: {
      return {
        ...state,
        err: null,
        isAuthenticated: true,
        account: action.payload,
        userLoading: false
      };
    }

    case LOGIN_USER_FAILED: {
      return {
        ...state,
        userLoading: false,
        isAuthenticated: false,
        err: action.payload
      };
    }

    default:
      return state;
  }
};

export default userReducer;
