import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltH, faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ToolBar = ({
  contain, setContain, index, total,
}) => (
    <div className="toolBar">
      {contain
        ? (
          <button type="button" onClick={() => setContain(false)}>
            <FontAwesomeIcon icon={faArrowsAltH} />
          </button>
        )
        : (
          <button type="button" onClick={() => setContain(true)}>
            <FontAwesomeIcon icon={faArrowsAltV} />
          </button>
        )}
      <span className="pagination">
        {index + 1}
        {' '}
        /
        {' '}
        {total}
      </span>
    </div>
  );

ToolBar.propTypes = {
  contain: PropTypes.bool.isRequired,
  setContain: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default ToolBar;
