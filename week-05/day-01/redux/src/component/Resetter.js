import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../redux/Counter/actionCreators';

const Resetter = ({ clickHandler }) => (
  <section>
    <h1>The Resetter</h1>
    <button type="button" onClick={clickHandler}>Reset</button>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(reset()),
});

export default connect(undefined, mapDispatchToProps)(Resetter);
