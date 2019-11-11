import React from 'react';
import { connect } from 'react-redux';
import { removeTag } from '../redux/Tag/actionCreators';
import Tag from './Tag';

const RemoveTag = ({ tags, clickHandler }) => (
  <section>
    <h1>Remove Tag</h1>
    {tags.map((tag) => (
      <Tag key={tag.id} value={tag.value} isDelete onClick={() => clickHandler(tag.value)} />
    ))}
  </section>
);

const mapStateToProps = (state) => ({
  tags: state.tagReducer.tags,
});

const mapDispatchToProps = (dispatch) => ({
  clickHandler: (value) => dispatch(removeTag(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTag);
