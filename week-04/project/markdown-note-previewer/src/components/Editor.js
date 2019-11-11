import React from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Editor = ({ content, onUpdate, setTitle }) => {
  const changeHandler = (e) => {
    const { value } = e.target;
    onUpdate(value);
    setTitle(value.split('\n')[0].trim('#').trim());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="toolBar">
        <button type="button" onClick={() => onUpdate('')}>Clear</button>
      </div>
      <textarea name="text" value={content} onChange={changeHandler} />
    </form>
  );
};

export default Editor;

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};
