import React from 'react';
import PropTypes from 'prop-types';

const DoneToDo = ({ content, action }) => (
  <li>
    {content}
    {' '}
    <button type="button" onClick={action}>delete</button>
  </li>
);


DoneToDo.propTypes = {
  content: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default DoneToDo;
