import React from 'react';

const Tag = ({ value, isDelete = false, onClick = null }) => (
  <div className={`tag ${isDelete && 'delete'}`}>
    <button type="button" onClick={onClick} disabled={!isDelete}>{value}</button>
  </div>
);

export default Tag;
