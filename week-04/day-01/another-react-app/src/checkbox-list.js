import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './checkbox';

export default function CheckboxList({ title, list }) {
  return (
    <form className="checkbox-container">
      <h2>{title}</h2>
      {list.map((element) => (
        <Checkbox
          key={`checkbox-${element.name
            .toLowerCase()
            .split(' ')
            .join('-')}`}
          name={element.name}
          checked={element.checked}
        />
      ))}
    </form>
  );
}

CheckboxList.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
  })).isRequired,
};
