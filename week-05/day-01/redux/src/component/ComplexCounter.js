import React from 'react';
import { connect } from 'react-redux';

const ComplexCounter = ({ amount }) => (
  <section>
    <h1>Complex Counter</h1>
    <p>{amount}</p>
  </section>
);

const mapStateToProps = (state) => ({
  amount: state.counterReducer.amount + state.tagReducer.tags.length,
});

export default connect(mapStateToProps)(ComplexCounter);
