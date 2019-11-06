import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheckCircle as checked } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import ItemStyle from './Item.module.css';

const Item = ({ text, done, onDelete, onDone }) => (
  <li className={ItemStyle.listItem}>
    <span className={[ItemStyle.listText, done && ItemStyle.done].join(' ')}>{text}</span>
    <div className={ItemStyle.buttonGroup}>
      <button className={ItemStyle.delete} type="button" onClick={onDelete}><FontAwesomeIcon icon={faTrash} /></button>
      <button className={(done && ItemStyle.finished) || ''} type="button" onClick={onDone}><FontAwesomeIcon icon={done ? checked : faCheckCircle} /></button>
    </div>
  </li>
);

Item.propTypes = {
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDone: PropTypes.func.isRequired,
};

export default Item;
