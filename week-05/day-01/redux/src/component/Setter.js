import React, { useState } from 'react';
import { connect } from 'react-redux';
import { set } from '../redux/Counter/actionCreators';

const Setter = ({ amount, clickHandler }) => {
  const [value, setValue] = useState(amount);
  const sanitizeAndSetValue = (val) => {
    setValue(Number.isNaN(val) ? value : parseInt(val, 10));
  };

  return (
    <section>
      <h1>The Setter</h1>
      <input value={value} onChange={(event) => sanitizeAndSetValue(event.target.value)} />
      <button type="button" onClick={() => clickHandler(value)}>Set</button>
    </section>
  );
};

const mapStateToProps = (state) => ({
  amount: state.counterReducer.amount,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (value) => dispatch(set(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setter);
