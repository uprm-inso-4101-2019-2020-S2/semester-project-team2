import { createStore, applyMiddleware } from "redux";
import reduxThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import reducers from "../../store/reducers";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunkMiddleware))
);

export default store;
