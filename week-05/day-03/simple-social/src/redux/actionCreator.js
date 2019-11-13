import {
  FETCH_POST_START, FETCH_POST_SUCCEED, FETCH_POST_ERROR,
} from './actionTypes';

const URL = 'https://jsonplaceholder.typicode.com';

export const fetchPostStart = () => ({
  type: FETCH_POST_START,
});

export const fetchPostSucceed = (data) => ({
  type: FETCH_POST_SUCCEED,
  payload: data,
});

export const fetchPostError = (error) => ({
  type: FETCH_POST_ERROR,
  payload: error.message,
});

export const fetchPost = () => (dispatch) => {
  dispatch(fetchPostStart());
  fetch(`${URL}/posts`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Cannot fetch posts!');
      }
      return response;
    })
    .then((response) => response.json())
    .then((response) => dispatch(fetchPostSucceed(response)))
    .catch((error) => dispatch(fetchPostError(error)));
};
