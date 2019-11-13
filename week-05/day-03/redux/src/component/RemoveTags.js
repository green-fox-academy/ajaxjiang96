import React from 'react';
import { connect } from 'react-redux';
import { removeTags } from '../redux/Tag/actionCreators';

const RemoveTags = ({ clickHandler }) => (
  <section>
    <h1>Remove All Tags</h1>
    <button type="button" onClick={clickHandler}>Remove All Tags</button>
  </section>
);

const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(removeTags()),
});

export default connect(undefined, mapDispatchToProps)(RemoveTags);
