import { FETCH_NEWS_FEED, ITEMS_LOADING } from "./types";
import axios from "axios";
import "regenerator-runtime/runtime";
export const dispatchNewsFeeds = (data) => {
  return {
    type: FETCH_NEWS_FEED,
    payload: data,
  };
};

export const fetchNewsFeeds = (start = 1, end = 30) => async (dispatch) => {
  const newsFeeds = [];
  dispatch(setItemLoading());
  for (let i = start; i <= end; i++) {
    await axios
      .get(`https://hn.algolia.com/api/v1/items${i}`)
      .then((data) => {
        newsFeeds.push(data);
        dispatch(dispatchNewsFeeds(newsFeeds));
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

export const setItemLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
