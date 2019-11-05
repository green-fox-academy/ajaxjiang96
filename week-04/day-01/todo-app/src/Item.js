import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ content, done, action }) => (
  <li>
    {content}
    {' '}
    <button type="button" onClick={action}>{done ? 'delete' : 'done'}</button>
  </li>
);


ListItem.propTypes = {
  content: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  action: PropTypes.func.isRequired,
};

export default ListItem;
