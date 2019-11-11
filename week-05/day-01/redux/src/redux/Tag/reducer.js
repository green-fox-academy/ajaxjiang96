import {
  ADD_TAG, REMOVE_TAG, REMOVE_TAGS,
} from './actionTypes';

const initialState = {
  tags: [],
};

export default (state = initialState, action) => {
  const tagsCopy = [...state.tags];
  switch (action.type) {
    case ADD_TAG:
      return {
        tags: [...state.tags, action.tag],
      };
    case REMOVE_TAG:
      tagsCopy.splice(tagsCopy.findIndex((tag) => tag.value === (action.value)), 1);
      return {
        tags: tagsCopy,
      };
    case REMOVE_TAGS:
      return {
        tags: [],
      };
    default:
      return state;
  }
};
