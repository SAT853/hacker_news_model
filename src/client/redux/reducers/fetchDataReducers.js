import { DATA_LOADING, FETCH_DATE } from "../actions/types";

const initialState = {
  hackernews: [],
  isDataLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DATA_LOADING:
      return {
        ...state,
        isDataLoading: false,
      };
    case FETCH_DATE:
      return {
        ...state,
        hackernews: [...state.hackernews, payload],
      };
    default:
      return state;
  }
};
