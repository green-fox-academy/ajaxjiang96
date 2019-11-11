import React from 'react';
import { connect } from 'react-redux';
import { decrease } from '../redux/Counter/actionCreators';

const Decreaser = ({ amount, clickHandler }) => (
  <section>
    <h1>The Decreaser</h1>
    <p>{amount}</p>
    <button type="button" onClick={clickHandler}>Decrease</button>
  </section>
);

const mapStateToProps = (state) => ({
  amount: state.counterReducer.amount,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser);
