import { combineReducers } from "redux";
import userReducer from "./user";

import BeachReducer from "./beach";

export default combineReducers({
  beach: BeachReducer,
  user: userReducer
});
