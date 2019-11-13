import React from 'react';
import { connect } from 'react-redux';
import { addTag } from '../redux/Tag/actionCreators';
import InputGroup from './InputGroup';

const AddTag = ({ addNewTag }) => {
  const clickHandler = (value) => {
    if (value) value.split(',').filter((tag) => tag !== '').forEach(addNewTag);
  };

  return (
    <section>
      <h1>Add Tag</h1>
      <InputGroup onClick={clickHandler} buttonText="Add" />
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewTag: (value) => dispatch(addTag(value)),
});

export default connect(undefined, mapDispatchToProps)(AddTag);
