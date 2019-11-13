import {
  FETCH_POST_START, FETCH_POST_SUCCEED, FETCH_POST_ERROR,
} from './actionTypes';

const initialState = {
  posts: [],
  loadingPosts: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_START:
      return {
        ...state,
        loadingPosts: true,
      };
    case FETCH_POST_SUCCEED:
      return {
        ...state,
        loadingPosts: false,
        posts: action.payload.slice(0, 10),
        error: null,
      };
    case FETCH_POST_ERROR:
      return {
        ...state,
        loadingPosts: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
