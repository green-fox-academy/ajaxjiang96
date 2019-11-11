import React from 'react';
import { connect } from 'react-redux';
import { set } from '../redux/Counter/actionCreators';
import InputGroup from './InputGroup';

const Setter = ({ amount, clickHandler }) => (
  <section>
    <h1>The Setter</h1>
    <InputGroup type="number" onClick={clickHandler} defaultVal={amount} buttonText="Set" />
  </section>
);

const mapStateToProps = (state) => ({
  amount: state.counterReducer.amount,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (value) => dispatch(set(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Setter);
