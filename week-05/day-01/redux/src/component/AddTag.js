import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTag } from '../redux/Tag/actionCreators';

const AddTag = ({ addNewTag }) => {
  const [value, setValue] = useState('');

  const clickHandler = () => {
    if (value) value.split(',').filter((tag) => tag !== '').forEach(addNewTag);
    setValue('');
  };

  return (
    <section>
      <h1>Add Tag</h1>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="button" onClick={clickHandler}>Add</button>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewTag: (value) => dispatch(addTag(value)),
});

export default connect(undefined, mapDispatchToProps)(AddTag);
