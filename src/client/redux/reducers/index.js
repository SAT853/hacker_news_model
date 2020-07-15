import { combineReducers } from "redux";
import newsFeedReducers from "./fetchDataReducers";

export default combineReducers({
  news: newsFeedReducers,
});
