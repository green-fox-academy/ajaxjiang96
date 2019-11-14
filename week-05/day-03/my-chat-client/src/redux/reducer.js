import {
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCEED,
  FETCH_MESSAGES_ERROR,
  POST_MESSAGE_START,
  POST_MESSAGE_ERROR,
  POST_MESSAGE_SUCCEED,
  FETCH_MORE_MESSAGES_SUCCEED,
} from './actionTypes';

const initialState = {
  messages: [],
  loadingMessages: false,
  error: null,
  user: 'Ajax',
  lazyIndex: 1,
  messageCount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES_START:
      return {
        ...state,
        loadingMessages: true,
      };
    case FETCH_MESSAGES_SUCCEED:
      return {
        ...state,
        loadingMessages: false,
        messages: action.payload.messages,
        messageCount: action.payload.count,
        error: null,
      };
    case FETCH_MORE_MESSAGES_SUCCEED:
      return {
        ...state,
        loadingMessages: false,
        lazyIndex: state.lazyIndex + 1,
        messageCount: action.payload.count,
        messages: [
          ...state.messages,
          ...[action.payload.messages.map(
            (message) => ({
              ...message,
              id: new Date(),
            }),
          )],
        ],
        error: null,
      };
    case FETCH_MESSAGES_ERROR:
      return {
        ...state,
        loadingMessages: false,
        error: action.payload,
      };
    case POST_MESSAGE_START:
      return {
        ...state,
        postingMessages: true,
      };
    case POST_MESSAGE_SUCCEED:
      return {
        ...state,
        postingMessages: false,
        error: null,
      };
    case POST_MESSAGE_ERROR:
      return {
        ...state,
        postingMessages: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
