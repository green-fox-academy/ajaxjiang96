import React from 'react';
import PropTypes from 'prop-types';

export default class Component2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mountTime: Date.now(),
    };
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;
    const { mountTime } = this.state;
    onUnmount(Date.now() - mountTime);
  }

  render() {
    return <h1>This is Component 2</h1>;
  }
}

Component2.propTypes = {
  onUnmount: PropTypes.func.isRequired,
};
