import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCEED,
  FETCH_MESSAGES_ERROR,
  POST_MESSAGE_START,
  POST_MESSAGE_ERROR,
  POST_MESSAGE_SUCCEED,
  FETCH_MORE_MESSAGES_SUCCEED,
} from './actionTypes';

const URL = 'https://stream-vanadium.glitch.me';

export const fetchMessagesStart = () => ({
  type: FETCH_MESSAGES_START,
});

export const fetchMessagesSucceed = (data) => ({
  type: FETCH_MESSAGES_SUCCEED,
  payload: data,
});

export const fetchMoreMessagesSucceed = (data) => ({
  type: FETCH_MORE_MESSAGES_SUCCEED,
  payload: data,
});


export const fetchMessagesError = (error) => ({
  type: FETCH_MESSAGES_ERROR,
  payload: error.message,
});

export const fetchMessages = () => (dispatch) => {
  dispatch(fetchMessagesStart());
  fetch(`${URL}/messages`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Cannot fetch messages!');
      }
      return response;
    })
    .then((response) => response.json())
    .then((response) => dispatch(fetchMessagesSucceed(response)))
    .catch((error) => dispatch(fetchMessagesError(error)));
};

export const fetchMoreMessages = (page) => (dispatch) => {
  dispatch(fetchMessagesStart());
  fetch(`${URL}/messages?page=${page}`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Cannot fetch messages!');
      }
      return response;
    })
    .then((response) => response.json())
    .then((response) => dispatch(fetchMoreMessagesSucceed(response)))
    .catch((error) => dispatch(fetchMessagesError(error)));
};

export const postMessageStart = () => ({
  type: POST_MESSAGE_SUCCEED,
});

export const postMessageSucceed = (data) => ({
  type: POST_MESSAGE_START,
  payload: data,
});

export const postMessageError = (error) => ({
  type: POST_MESSAGE_ERROR,
  payload: error.message,
});

export const postMessage = (user, text) => (dispatch) => {
  dispatch(postMessageStart());
  fetch(`${URL}/messages`, {
    method: 'POST',
    body: JSON.stringify({
      user,
      text,
      style: {
        background: 'black',
        color: 'white',
      },
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('Cannot send message!');
      }
      return response;
    })
    .then((response) => response.json())
    .then((response) => dispatch(postMessageSucceed(response)))
    .then(() => dispatch(fetchMessages()))
    .catch((error) => dispatch(postMessageError(error)));
};
