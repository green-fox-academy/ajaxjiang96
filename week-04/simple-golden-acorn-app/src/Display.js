import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ content }) => <p>{content}</p>;

Display.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Display;
