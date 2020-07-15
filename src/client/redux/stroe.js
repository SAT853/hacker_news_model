import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducers from "./reducers";

const initialState = {};

export const store = createStore(
  rootReducers,
  initialState,
  applyMiddleware(thunk, logger)
);
