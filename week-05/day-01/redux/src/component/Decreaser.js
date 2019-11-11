import React from 'react';
import { connect } from 'react-redux';
import { decrease } from '../redux/Counter/actionCreators';
import InputGroup from './InputGroup';

const Decreaser = ({ amount, clickHandler }) => (
  <section>
    <h1>The Decreaser</h1>
    <p>{amount}</p>
    <InputGroup type="number" onClick={clickHandler} buttonText="Decrease" defaultVal={1} />
    {/* <button type="button" onClick={clickHandler}>Decrease</button> */}
  </section>
);

const mapStateToProps = (state) => ({
  amount: state.counterReducer.amount,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (value) => dispatch(decrease(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser);
