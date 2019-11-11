import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ docs, addNew }) => (
  <nav>
    <h1>Notes</h1>
    {docs.map((doc) => (
      <NavLink key={doc.id} to={`/${doc.id}`} activeClassName="active">
        {doc.title}
      </NavLink>
    ))}
    <button type="button" onClick={addNew}>+ Add New</button>
  </nav>
);

Nav.propTypes = {
  docs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
  addNew: PropTypes.func.isRequired,
};

export default Nav;
