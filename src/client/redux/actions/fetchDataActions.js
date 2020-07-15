import { FETCH_DATE, DATA_LOADING } from "./types";
import axios from "axios";

export const dispatchNewsFeed = (data) => {
  return {
    type: FETCH_DATE,
    payload: data,
  };
};

export const fetchData = () => async (dispatch) => {
  dispatch(setDataLoading());
  const URL = "http://hn.algolia.com/api/v1/items/10";
  await axios
    .get(URL)
    .then(({ data }) => {
      dispatch(dispatchNewsFeed(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setDataLoading = () => {
  return {
    type: DATA_LOADING,
  };
};
