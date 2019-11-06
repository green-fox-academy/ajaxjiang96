import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Todo.css';
import themes from './themes';

const ThemeSwitcher = ({ themeName }) => {
  const theme = themes[themeName];
  return (
    <div className="App" style={theme.App}>
      <main style={theme.container}>
        <h1 className="heading" style={theme.style}>THEME SWITCHER</h1>
        <ul className="itemList" style={theme.itemList}>
          <Link to="/" style={theme.link}>Default</Link>
          <Link to="/themed/superman" style={theme.link}>Superman</Link>
          <Link to="/themed/batman" style={theme.link}>Batman</Link>
        </ul>
      </main>
    </div>
  );
};

export default ThemeSwitcher;
ThemeSwitcher.propTypes = {
  themeName: PropTypes.string,
};
ThemeSwitcher.defaultProps = {
  themeName: 'default',
};
