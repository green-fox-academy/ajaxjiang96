import React from 'react';
import { connect } from 'react-redux';
import { decrease } from '../redux/Counter/actionCreators';
import Tag from './Tag';

const Tags = ({ tags }) => (
  <section>
    <h1>Tags</h1>
    {tags.map((tag) => <Tag key={tag.id} value={tag.value} />)}
  </section>
);

const mapStateToProps = (state) => ({
  tags: state.tagReducer.tags,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: () => dispatch(decrease()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
