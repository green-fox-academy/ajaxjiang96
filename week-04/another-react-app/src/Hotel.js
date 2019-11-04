import React from 'react';
import PropTypes from 'prop-types';

export default function Hotel({
  name, description, img, book,
}) {
  return (
    <li>
      <h3>{name}</h3>
      <div className="hotel-details">
        <img src={img} alt={name} />
        <div className="description-text-and-button">
          <p>{description}</p>
          <button onClick={book} type="button">Book Now!</button>
        </div>
      </div>
    </li>
  );
}

Hotel.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  book: PropTypes.func.isRequired,
};
