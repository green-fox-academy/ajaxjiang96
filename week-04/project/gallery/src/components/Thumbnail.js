import React from 'react';
import PropTypes from 'prop-types';
import { imageProps } from '../models/propTypes';

const Thumbnail = ({ image, onSelect, selected }) => (
  <li>
    <button onClick={onSelect} type="button" className={`${selected && 'selected'}`}><img className="thumbnail" src={image.urls.thumb} alt={image.alt_description} /></button>
    <div className={`indicator ${selected && 'selected'}`} />
    <div className="tooltip">
      <div className="shape" />
      <div className="content">{image.description || 'Untitled'}</div>
    </div>
  </li>
);

Thumbnail.propTypes = {
  image: imageProps.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Thumbnail;
