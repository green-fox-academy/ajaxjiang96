import React from 'react';
import { connect } from 'react-redux';
import { increase } from '../redux/Counter/actionCreators';
import InputGroup from './InputGroup';

const Increaser = ({ amount, clickHandler }) => (
  <section>
    <h1>The Increaser</h1>
    <p>{amount}</p>
    <InputGroup type="number" buttonText="Increase" onClick={clickHandler} defaultVal={1} />
  </section>
);

const mapStateToProps = (state) => ({
  amount: state.counterReducer.amount,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (value) => dispatch(increase(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);
