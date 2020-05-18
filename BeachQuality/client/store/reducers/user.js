import { userActionTypes } from "../actions/types";
const {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  SET_USER_LOCATION,
  TOGGLE_LOCATION,
  LOGIN_USER,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER,
  ADD_FAVORITE,
  ADD_FAVORITE_SUCCESS,
  ADD_FAVORITE_FAILED,
  FETCH_USER_INFO,
  FETCH_USER_INFO_FAILED,
  FETCH_USER_INFO_SUCCESS,
  REMOVE_FAVORITE,
  REMOVE_FAVORITE_FAILED,
  REMOVE_FAVORITE_SUCCESS
} = userActionTypes;

const initialState = {
  err: null,
  authListener: null,
  account: null,
  userLoading: false,
  location: null,
  isAuthenticated: false,
  useLocation: -1
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Register
    case REGISTER_USER: {
      return {
        ...state,
        userLoading: true
      };
    }

    case REGISTER_USER_FAILED: {
      return {
        ...state,
        userLoading: false,
        err: action.payload
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        authListener: action.payload,
        account: action.payload.data.account,
        userLoading: false,
        isAuthenticated: true,
        err: null
      };
    }
    case SET_USER_LOCATION: {
      return {
        ...state,
        location: action.payload
      };
    }

    case TOGGLE_LOCATION: {
      return {
        ...state,
        useLocation: action.payload
      };
    }

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
        authListener: action.payload,
        account: action.payload.data.account,
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

    case LOGOUT_USER: {
      return {
        ...state,
        userLoading: true
      };
    }

    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        userLoading: false,
        account: null,
        authListener: null,
        isAuthenticated: false
      };
    }

    case LOGOUT_USER_FAILED: {
      return {
        ...state,
        err: action.payload
      };
    }

    case ADD_FAVORITE: {
      return {
        ...state,
        userLoading: true
      };
    }
    case ADD_FAVORITE_SUCCESS: {
      return {
        ...state,
        userLoading: false
      };
    }

    case ADD_FAVORITE_FAILED: {
      return {
        ...state,
        userLoading: false,
        err: action.payload
      };
    }

    case FETCH_USER_INFO: {
      return {
        ...state,
        userLoading: true
      };
    }

    case FETCH_USER_INFO_SUCCESS: {
      return {
        ...state,
        account: action.payload,
        userLoading: false
      };
    }

    case FETCH_USER_INFO_FAILED: {
      return {
        ...state,
        err: action.payload,
        userLoading: false
      };
    }

    case REMOVE_FAVORITE: {
      return {
        ...state,
        userLoading: true
      };
    }

    case REMOVE_FAVORITE_SUCCESS: {
      return {
        ...state,
        userLoading: false
      };
    }

    case REMOVE_FAVORITE_FAILED: {
      return {
        ...state,
        err: action.payload,
        userLoading: false
      };
    }

    default:
      return state;
  }
};

export default userReducer;
