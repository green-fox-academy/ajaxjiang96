import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import { galleryProps } from '../models/propTypes';
import Thumbnail from './Thumbnail';
import ImageViewer from './ImageViewer';
import ImagePlaceholder from './ImagePlaceholder';


const Gallery = ({ images, loading }) => {
  const [selectedI, setSelectedI] = useState(0);
  const selected = images[selectedI];

  const navLeft = useCallback(() => setSelectedI(Math.max(selectedI - 1, 0)), [selectedI]);
  const navRight = useCallback(() => setSelectedI(Math.min(selectedI + 1, images.length - 1)),
    [selectedI, images.length]);

  const handleKeyDown = useCallback((e) => {
    switch (e.code) {
      case 'ArrowLeft':
        navLeft(); break;
      case 'ArrowRight':
        navRight(); break;
      default:
    }
  }, [navLeft, navRight]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);


  return (
    <main className="gallery">
      <button className="galleryController" type="button" onClick={navLeft} disabled={selectedI === 0}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="galleryContainer">
        {loading
          ? <ImagePlaceholder />
          : (
            <ImageViewer
              image={selected}
              index={selectedI}
              total={images.length}
              loading={loading}
            />
          )}
        <ul className={`${loading && 'loading'}`}>
          {images.map((image, i) => (
            <Thumbnail
              key={image.id}
              image={image}
              onSelect={() => setSelectedI(i)}
              selected={selectedI === i}
            />
          ))}
        </ul>
      </div>
      <button className="galleryController" type="button" onClick={navRight} disabled={selectedI === images.length - 1}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </main>
  );
};

Gallery.propTypes = {
  ...galleryProps,
  loading: PropTypes.bool.isRequired,
};

export default Gallery;
