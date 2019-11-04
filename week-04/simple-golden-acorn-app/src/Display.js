import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ children }) => <p>{children}</p>;

Display.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Display;
