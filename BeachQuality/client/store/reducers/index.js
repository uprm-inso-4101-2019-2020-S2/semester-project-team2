import { combineReducers } from "redux";

import BeachReducer from "./beach";

export default combineReducers({
  beach: BeachReducer
});
