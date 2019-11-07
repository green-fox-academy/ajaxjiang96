import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { imageProps } from '../models/propTypes';
import ToolBar from './ToolBar';

const ImageViewer = ({ image, index, total }) => {
  const [contain, setContain] = useState(false);
  return (
    <figure className="imgViewer">
      <ToolBar contain={contain} setContain={setContain} index={index} total={total} />
      <div className="imgContainer">
        <div className={`imgWrapper ${contain && 'fit-contain'}`}>
          <img className="galleryMainImg" src={image.urls.regular} alt={image.alt_description} />
        </div>
      </div>
      <figcaption>
        <section>
          <h1>{image.description || 'Untitled'}</h1>
          <h2>
            Photo By
            {' '}
            <a href={image.user.links.html} target="_blank" rel="noopener noreferrer">{image.user.name}</a>
          </h2>
        </section>
      </figcaption>
    </figure>
  );
};

ImageViewer.propTypes = {
  image: imageProps.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ImageViewer;
