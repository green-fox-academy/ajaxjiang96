import PropTypes from 'prop-types';

const imageProps = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string,
  alt_description: PropTypes.string,
  urls: PropTypes.shape({
    thumb: PropTypes.string.isRequired,
    regular: PropTypes.string.isRequired,
    full: PropTypes.string.isRequired,
  }),

});

const galleryProps = {
  images: PropTypes.arrayOf(imageProps),
};

export {
  galleryProps,
  imageProps,
};
