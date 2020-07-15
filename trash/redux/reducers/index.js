import { combineReducers } from "redux";
import newsFeedReducers from "./newsFeedReducers";

export default combineReducers({
  news: newsFeedReducers,
});
