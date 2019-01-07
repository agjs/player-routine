import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import auth from "./authentication/reducer";
import nav from "./navigation/reducer";
import status from "./status/reducer";

const store = createStore(
  combineReducers({
    auth,
    nav,
    status
  }),
  applyMiddleware(thunk)
);

export default store;
