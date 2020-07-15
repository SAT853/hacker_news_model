import { FETCH_NEWS_FEED, ITEMS_LOADING } from "../actions/types";

const intialState = {
  hackernews: [],
  isLoading: true,
};

const newsFeeReducers = (state = intialState, { type, payload }) => {
  switch (type) {
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case FETCH_NEWS_FEED:
      return {
        ...state,
        hackernews: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default newsFeeReducers;
