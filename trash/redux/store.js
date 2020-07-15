import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import logger from "redux-logger";

const initialState = {};

const middleware = applyMiddleware(thunk, logger);

export const store = createStore(rootReducer, initialState, middleware);
