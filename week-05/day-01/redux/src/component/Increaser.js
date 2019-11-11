import React from 'react';
import { connect } from 'react-redux';
import { increase } from '../redux/Counter/actionCreators';

const Increaser = ({ amount, clickHandler }) => (
  <section>
    <h1>The Increaser</h1>
    <p>{amount}</p>
    <button type="button" onClick={clickHandler}>Increase</button>
  </section>
);

const mapStateToProps = (state) => ({
  amount: state.counterReducer.amount,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(increase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);
