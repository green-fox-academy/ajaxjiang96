import {
  ADD_TAG, REMOVE_TAG, REMOVE_TAGS,
} from './actionTypes';


let id = 0;
export const addTag = (tag) => {
  id += 1;
  return ({
    type: ADD_TAG,
    tag: {
      value: tag,
      id,
    },
  });
};

export const removeTag = (tag) => ({
  type: REMOVE_TAG,
  value: tag,
});

export const removeTags = () => ({
  type: REMOVE_TAGS,
});
