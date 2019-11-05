import React from 'react';
import PropTypes from 'prop-types';

const ToDo = ({ content, action }) => (
  <li>
    {content}
    {' '}
    <button type="button" onClick={action}>done</button>
  </li>
);


ToDo.propTypes = {
  content: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default ToDo;
