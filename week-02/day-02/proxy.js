'use strict';

/* eslint-disable no-param-reassign */
const handler = {
  get(targetObject, field) {
    if (field === 'nextId') {
      this.set(targetObject, field, targetObject[field] ? targetObject[field] + 1 : 1)
      return targetObject[field];
    }
    return undefined;
  },
  set(targetObject, field, value) {
    if (field === 'nextId') {
      targetObject[field] = value;
    }
  },
};
